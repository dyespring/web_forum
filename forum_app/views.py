from django.shortcuts import render
from .models import Post, Comment
from .serializers import PostSerializer,CommentSerializer
from rest_framework import viewsets, generics

# def post_list(request):
#     posts = Post.objects.all()
#     return render(request, 'forum_app/post_list.html', {'posts': posts})

# def post_detail(request, pk):
#     post = Post.objects.get(pk=pk)
#     comments = Comment.objects.filter(post=post)
#     return render(request, 'forum_app/post_detail.html', {'post': post, 'comments': comments})
#     # return HttpResponse("Hello Spring")

# def index(request):
#     posts = Post.objects.all()
#     return render(request, 'forum_app/index.html', {'posts': posts})


class PostViewSet(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CreatePost(generics.CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CommentViewSet(generics.CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
