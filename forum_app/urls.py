from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import Post_List,Post_Create,Comment_List,Comment_Create,User_List,User_Create,Group_List,Group_Create,list_users,UserRegistrationAPIView
from . import views
from django.contrib.auth.views import LoginView


urlpatterns = [
    path('create_post', Post_Create.as_view()),
    path('list_post', Post_List.as_view()),
    path('create_comment', Comment_Create.as_view()),
    path('list_comment', Comment_List.as_view()),
    path('create_user', User_Create.as_view()),
    path('list_user2', list_users),
    path('create_group', Group_Create.as_view()),
    path('list_group', Group_List.as_view()),
    path('login', views.login_view, name='login'),
    path('register', UserRegistrationAPIView.as_view(), name='register'),
    path('list_post/<int:thread_id>/', views.thread_detail, name='thread_detail')
]
