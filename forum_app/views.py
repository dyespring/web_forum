from django.shortcuts import render
from .models import Post, Comment,UserProfile,GroupMembership
from .serializers import PostSerializer,CommentSerializer,UserSerializer,GroupSerializer,UserRegistrationSerializer
from rest_framework import viewsets, generics,status
from django.contrib.auth import authenticate, login
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.shortcuts import get_object_or_404
from django.core.serializers import serialize

class Post_List(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class Post_Create(generics.CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class Comment_List(generics.ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class Comment_Create(generics.CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class User_List(generics.ListAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserSerializer

class User_Create(generics.CreateAPIView):
    permission_classes = (AllowAny,)
    queryset = UserProfile.objects.all()
    serializer_class = UserSerializer

class Group_List(generics.ListAPIView):
    queryset = GroupMembership.objects.all()
    serializer_class = GroupSerializer

class Group_Create(generics.CreateAPIView):
    queryset = GroupMembership.objects.all()
    serializer_class = GroupSerializer

from django.contrib.auth.models import User
from django.http import JsonResponse

def list_users(request):
    users = User.objects.all()
    user_data = [{'id': user.id, 'username': user.username, 'email': user.email} for user in users]
    return JsonResponse({'users': user_data})


from django import forms


class LoginForm(forms.Form):
    username = forms.CharField(label='Username')
    password = forms.CharField(label='Password', widget=forms.PasswordInput)

from django.shortcuts import render, redirect
from django.http import JsonResponse

def login_view(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                response = JsonResponse({'message': 'Login successful'})
                return response
            else:
                form.add_error(None, 'Invalid username or password')
                return JsonResponse({'message': 'wrong passworld!!!'}) # Replace 'home' with your URL name
    else:
        form = LoginForm()
    return render(request, 'login.html', {'form': form})


class UserRegistrationAPIView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def thread_detail(request, thread_id):
    thread = get_object_or_404(Post, pk=thread_id)
    data = {'id': thread.id, 'title': thread.title, 'content': thread.content}
    return JsonResponse(data)
