from rest_framework.generics import RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from lib.views import OwnerListCreateView
from lib.permissions import IsOwnerOrReadOnly
from .serializers.common import CarToIdSerializer
from .serializers.populated import PopulatedCarToIdSerializer
from .models import CarToId

# Path: /carstoid/
# Methods: GET, POST
class CarToIdCreateView(OwnerListCreateView):
  queryset = CarToId.objects.all()
  serializer_class = CarToIdSerializer
  permission_classes = [IsAuthenticatedOrReadOnly]

# Path: /carstoid/:cartoid-id/
# Methods: GET, PUT, PATCH, DELETE
class CarToIdSingleView(RetrieveUpdateDestroyAPIView):
  queryset = CarToId.objects.all()
  permission_classes = [IsOwnerOrReadOnly]
  def get_serializer_class(self):
    if self.request.method == 'GET':
      return PopulatedCarToIdSerializer
    return CarToIdSerializer