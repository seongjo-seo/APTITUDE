from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

from home.views import home

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home),
    path('/', include('home.urls')),
    path('users/', include('users.urls')),
    path('custom/', include('custom.urls')),
    path('review/', include('review.urls')),
    path('sale/', include('sale.urls')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)