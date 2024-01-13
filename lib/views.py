from rest_framework.generics import ListCreateAPIView
from carstoid.models import CarToId

class OwnerListCreateView(ListCreateAPIView):
  def perform_create(self, serializer):
    serializer.save(owner=self.request.user)

class CommentListCreateView(ListCreateAPIView):
  def perform_create(self, serializer):
    print('REQUEST USER ->',self.request.user)
    serializer.save(owner=self.request.user)
    get_car_to_id = CarToId.objects.get(pk=self.kwargs['pk'])
    print('CAR TO ID ->', get_car_to_id)
    serializer.save(car_to_id=get_car_to_id)