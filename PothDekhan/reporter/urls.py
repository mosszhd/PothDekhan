from django.conf.urls import include,url
from django.urls import path

from reporter.views import HomePageView


urlpatterns = [
    url(r'^$',HomePageView.as_view(), name= 'home'),
    
]