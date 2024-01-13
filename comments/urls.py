from django.urls import path
from .views import CommentCreateView

urlpatterns = [
  path('cartoid/<int:pk>/', CommentCreateView.as_view())
]