from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostViewSet, CommentViewSet, CreatePost


# urlpatterns = [
#     # path('', views.post_list, name='post_list'),
#     path('', views.index, name='index'),
#     # path('<int:pk>/', views.post_detail, name='post_detail'),
#     path('<int:pk>/', views.post_detail, name='post_detail'),
# ]


# router = DefaultRouter()
# router.register(r'posts', PostViewSet)
# router.register(r'comments', CommentViewSet)

urlpatterns = [
    path('create_post', CreatePost.as_view()),
    path('create_comment', CommentViewSet.as_view()),
    path('post_list', PostViewSet.as_view()),
]
