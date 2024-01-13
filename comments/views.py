from rest_framework.permissions import IsAuthenticatedOrReadOnly
from lib.views import OwnerListCreateView, CommentListCreateView
from .serializers.common import CommentSerializer
from .models import Comment

# Path: /comments/cartoid/:cartoid-id/
# Methods: GET, POST
class CommentCreateView(CommentListCreateView):
  def get_queryset(self):
    return Comment.objects.filter(car_to_id=self.kwargs['pk'])
  serializer_class = CommentSerializer
  permission_classes = [IsAuthenticatedOrReadOnly]
