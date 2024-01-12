from rest_framework.serializers import ModelSerializer
from ..models import CarToId

class CarToIdSerializer(ModelSerializer):
  class Meta:
    model = CarToId
    fields = '__all__'