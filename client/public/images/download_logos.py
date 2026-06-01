import urllib.request
import os

target_dir = "c:/Users/ywx1505725/Desktop/Icom Global/client/public/images/clients"
os.makedirs(target_dir, exist_ok=True)

# Direct URLs to actual corporate and historical logos on the web
logo_urls = {
  'MTN': 'https://upload.wikimedia.org/wikipedia/commons/e/e0/New-mtn-logo.jpg',
  'Huawei': 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Huawei_logo.svg',
  'Ericsson': 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Ericsson_logo.svg',
  'ZTE': 'https://upload.wikimedia.org/wikipedia/commons/e/e0/ZTE_logo.svg',
  'Zain': 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Zain_%28Unternehmen%29_logo.svg',
  'Visafone': 'https://guardian.ng/wp-content/uploads/2016/01/Visafone-Logo.jpg',
  'Starcomms': 'https://techeconomy.ng/wp-content/uploads/2018/11/Starcomms-Logo.jpg',
}

# Defunct/historical regional carriers or hardware lines with no active branding files
placeholder_clients = {
  'Andrews': 'https://placehold.co/200x80/F4F6F9/0B1F3A?text=Andrews',
  'RTcom': 'https://placehold.co/200x80/F4F6F9/0B1F3A?text=RTcom',
  'Reltel': 'https://placehold.co/200x80/F4F6F9/0B1F3A?text=Reltel',
  'Mtel': 'https://placehold.co/200x80/F4F6F9/0B1F3A?text=Mtel',
}

headers = {
  'User-Agent': 'IcomGlobalWebsiteBuilder/1.0 (info@icomtsl.com) urllib/3.9',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
}

def download_file(url, dest):
  req = urllib.request.Request(url, headers=headers)
  with urllib.request.urlopen(req) as response:
    with open(dest, 'wb') as f:
      f.write(response.read())

# Download main logos
for client, url in logo_urls.items():
  filename = client.lower()
  ext = url.split('.')[-1].split('?')[0].lower()
  # For Zain and others, url might end with Unternehmen) logo.svg, extract extension
  if 'svg' in ext:
    ext = 'svg'
  elif 'png' in ext:
    ext = 'png'
  else:
    ext = 'jpg'
    
  dest = os.path.join(target_dir, f"{filename}.{ext}")
  try:
    print(f"Downloading {client} from {url}...")
    download_file(url, dest)
    print(f"Success: {client} -> {filename}.{ext}")
  except Exception as e:
    print(f"Failed to download {client}: {e}. Saving a stylized fallback.")
    # Fallback to placehold if download fails
    try:
      fallback_url = f"https://placehold.co/200x80/F4F6F9/0B1F3A?text={client}"
      download_file(fallback_url, os.path.join(target_dir, f"{filename}.png"))
      print(f"Success: Saved fallback for {client} -> {filename}.png")
    except Exception as fe:
      print(f"Critical error saving fallback for {client}: {fe}")

# Download placeholder logos
for client, url in placeholder_clients.items():
  filename = client.lower()
  dest = os.path.join(target_dir, f"{filename}.png")
  try:
    print(f"Downloading placeholder for {client}...")
    download_file(url, dest)
    print(f"Success: {client} -> {filename}.png")
  except Exception as e:
    print(f"Error downloading placeholder for {client}: {e}")

print("Download script complete.")
