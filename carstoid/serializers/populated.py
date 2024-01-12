from .common import CarToIdSerializer
from comments.serializers.common import CommentSerializer

class PopulatedCarToIdSerializer(CarToIdSerializer):
  comments = CommentSerializer(many=True)