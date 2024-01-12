from django.db import models

class Car(models.Model):
  make = models.CharField(max_length=30, blank=False, null=False)
  model = models.CharField(max_length=30, blank=False, null=False)
  year = models.PositiveIntegerField()
  image = models.CharField()
  bodystyle = models.CharField(blank=False, null=False)
  engine = models.CharField()
  power = models.PositiveIntegerField()
  layout = models.CharField()
  weight = models.PositiveIntegerField()
  description = models.TextField(max_length = 1000)
  owner = models.ForeignKey(
    to='users.User',
    on_delete=models.CASCADE,
    related_name='owned_cars',
    null=True
  )

  def __str__(self):
    return f"{self.make} - {self.model}"