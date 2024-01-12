from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from lib.views import OwnerListCreateView
from lib.permissions import IsOwnerOrReadOnly
from .models import Car
from .serializers.common import CarSerializer

# Path: /cars/
# Methods: GET, POST
class CarIndexCreateView(OwnerListCreateView):
  queryset = Car.objects.all()
  serializer_class = CarSerializer
  permission_classes = [IsAuthenticatedOrReadOnly]

# Path: /cars/:car-id/
# Methods: GET, PUT, PATCH, DELETE
class CarDetailView(RetrieveUpdateDestroyAPIView):
  queryset = Car.objects.all()
  serializer_class = CarSerializer
  permission_classes = [IsOwnerOrReadOnly]
  
# Path: /garage/:user-id/
# Methods: GET
class GarageView(ListAPIView):
  def get_queryset(self):
    return Car.objects.filter(owner_id=self.kwargs['pk'])
  serializer_class = CarSerializer
  permission_classes = [IsOwnerOrReadOnly]
