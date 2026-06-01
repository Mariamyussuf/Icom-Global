import urllib.request
import urllib.parse
import re

search_url = "https://html.duckduckgo.com/html/?q=MTN+logo+png"
browser_headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
}
req = urllib.request.Request(search_url, headers=browser_headers)
try:
  with urllib.request.urlopen(req) as r:
    html = r.read().decode('utf-8')
    print("HTML Length:", len(html))
    print("HTML Preview (first 1000 chars):")
    print(html[:1000])
    
    # Check if there are any image elements or if it's a redirect/captcha page
    img_tags = re.findall(r'<img[^>]+>', html)
    print("Found img tags:", len(img_tags))
    for t in img_tags[:5]:
      print("Tag:", t)
except Exception as e:
  print("Error:", e)
