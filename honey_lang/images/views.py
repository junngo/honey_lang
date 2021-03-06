from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from . import models, serializers
from honey_lang.users import serializers as user_serializers
from honey_lang.users import models as user_models

class Images(APIView):

    def get(self, request, format=None):

        user = request.user
        following_users = user.following.all()

        image_list = []

        for following_user in following_users:
            user_images = following_user.images.all()[:2]

            for image in user_images:
                image_list.append(image)

        my_images = user.images.all()[:2]
        for image in my_images:
            image_list.append(image)

        sorted_list = sorted(
            image_list, key=lambda image: image.created_at, reverse=True)

        serializer = serializers.ImageSerializer(sorted_list, 
                                                 many=True, 
                                                 context={'request': request}
                                                )

        return Response(serializer.data)


class LikeImage(APIView):

    def get(self, request, image_id, format=None):

        likes = models.Like.objects.filter(image__id=image_id)
        like_creators_ids = likes.values('creator_id')
        users = user_models.User.objects.filter(id__in=like_creators_ids)

        serializer = user_serializers.ListUserSerializer(users, many=True, context={"request":request})

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    #If I have a variable named user_id on a URL, how can I use it?
    def post(self, request, image_id, format=None):

        user = request.user

        try:
            found_image = models.Image.objects.get(id=image_id)
        except models.Image.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        try:
            preexisting_like = models.Like.objects.get(
                creator = user,
                image = found_image
            )

            return Response(status=status.HTTP_304_NOT_MODIFIED)

        except models.Like.DoesNotExist:
            new_like = models.Like.objects.create(
                creator = user,
                image = found_image
            )

            new_like.save()

            return Response(status=status.HTTP_201_CREATED)


class UnLikeImage(APIView):

    def delete(self, request, image_id, format=None):

        user = request.user

        try:
            found_image = models.Image.objects.get(id=image_id)
        except models.Image.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        try:
            preexisting_like = models.Like.objects.get(
                creator = user,
                image = found_image
            )
            preexisting_like.delete()

            return Response(status=status.HTTP_204_NO_CONTENT)

        except models.Like.DoesNotExist:
            return Response(status=status.HTTP_304_NOT_MODIFIED)


class CommentOnImage(APIView):

    def post(self, request, image_id, format=None):

        user = request.user

        try:
            found_image = models.Image.objects.get(id=image_id)
        except models.Image.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = serializers.CommentSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save(creator=user, image=found_image)

            return Response(data=serializer.data,status=status.HTTP_201_CREATED)

        else:
            return Response(data=serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class Search(APIView):

    def get(self, request, format=None):

        hashtags = request.query_params.get('hashtags', None)
        if hashtags is not None:

            hashtags = hashtags.split(",")

            images = models.Image.objects.filter(
                tags__name__in=hashtags).distinct()

            serializer = serializers.ImageSerializer(
                images, many=True, context={'request': request})

            return Response(data=serializer.data, status=status.HTTP_200_OK)

        else:

            images = models.Image.objects.all()[:20]
            serializer = serializers.ImageSerializer(
                images, many=True, context={'request': request})

            return Response(data=serializer.data, status=status.HTTP_200_OK)
