from django.urls import path
from .views import CarIndexCreateView, CarDetailView, GarageView

# Every request that hits this starts with /cars/
urlpatterns = [
  path('', CarIndexCreateView.as_view()), # this path is /cars/
  path('<int:pk>/', CarDetailView.as_view()), # this path is /cars/:id/
  path('garage/<int:pk>/', GarageView.as_view())
]