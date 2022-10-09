from django.shortcuts import render

# Create your views here.
def review_post(request):
  return render(request, 'review_post.html', {})

def review_detail(request):
  return render(request, 'review_detail.html', {})