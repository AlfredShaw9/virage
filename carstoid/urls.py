from django.urls import path
from .views import CarToIdCreateView, CarToIdSingleView

urlpatterns = [
  path('', CarToIdCreateView.as_view()),
  path('<int:pk>/', CarToIdSingleView.as_view()),
]