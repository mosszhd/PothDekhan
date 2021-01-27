#from django.db import models
from django.contrib.gis.db import models
from django.db.models import Manager as GeoManager

# Create your models here.
class Places(models.Model):
    name = models.CharField(max_length=120)
    lat = models.FloatField(max_length=20,default=0.0)
    lon = models.FloatField(max_length=20,default=0.0)
    #objects = GeoManager()

    def __Unicode__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Places"

    def __str__(self):
        return '%s' % self.name