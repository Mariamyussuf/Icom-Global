import urllib.request
import urllib.parse
import re
import os
import time

dest_services = r"c:\Users\ywx1505725\Desktop\Icom Global\client\public\images\services"
dest_root = r"c:\Users\ywx1505725\Desktop\Icom Global\client\public\images"

os.makedirs(dest_services, exist_ok=True)
os.makedirs(dest_root, exist_ok=True)

# Map filenames to their Unsplash search queries and target folders
queries = {
  # Root images
  "corporate_team.jpg": ("diverse corporate team business professionals", dest_root),
  "handshake_boardroom.jpg": ("handshake boardroom business meeting", dest_root),
  "mind_silhouette.jpg": ("digital brain head technology background", dest_root),
  "hands_globe.jpg": ("hands holding earth globe", dest_root),
  "lagos_skyline.jpg": ("Lagos city skyline skyline marina", dest_root),
  "glass_highrise.jpg": ("modern glass highrise corporate skyscraper night", dest_root),
  
  # Service images
  "drive_testing_handsets.jpg": ("mobile phone test grid signal", dest_services),
  "field_software_kit.jpg": ("diagnostics rugged laptop engineering", dest_services),
  "rack_assembly.jpg": ("telecommunication server rack interior cabinet", dest_services),
  "foundation_pouring.jpg": ("concrete anchor foundation construction site", dest_services),
  "satellite_splicing.jpg": ("satellite dish fiber optic splicing", dest_services),
  "fiber_trenching.jpg": ("fiber optic spool cable trench construction", dest_services),
  "satellite_field.jpg": ("satellite dish antenna station", dest_services),
  "dish_assembly_grid.jpg": ("telecom installation technician assembly", dest_services),
  "cable_drops.jpg": ("server cabling database patch cables", dest_services),
  "transformer_station.jpg": ("electrical transformer generator utility box", dest_services),
  "wall_mounted_dish.jpg": ("satellite dish modern glass building", dest_services),
  "compound_render.jpg": ("telecommunications compound shelter rendering", dest_services),
  "line_enclosures.jpg": ("weatherproof server enclosures industrial warehouse", dest_services),
}

headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36'
}

for filename, (query, dest_folder) in queries.items():
  dest_path = os.path.join(dest_folder, filename)
  print(f"Searching Unsplash for: '{query}'...")
  
  try:
    q = urllib.parse.quote(query)
    search_url = f"https://unsplash.com/s/photos/{q}"
    req = urllib.request.Request(search_url, headers=headers)
    
    html = ""
    with urllib.request.urlopen(req) as response:
      html = response.read().decode('utf-8')
      
    # Find Unsplash photo IDs (e.g. photo-1573496359142-b8d87734a5a2)
    photo_ids = re.findall(r'photo-[a-zA-Z0-9\-]+', html)
    
    if photo_ids:
      # Filter for unique photo IDs and choose the first one
      unique_ids = []
      for pid in photo_ids:
        # Filter out short fragments that might mismatch
        if len(pid) > 15 and pid not in unique_ids:
          unique_ids.append(pid)
          
      if unique_ids:
        photo_id = unique_ids[0]
        img_url = f"https://images.unsplash.com/{photo_id}?auto=format&fit=crop&w=800&h=600&q=80"
        print(f"Found photo ID: {photo_id}. Downloading from {img_url}...")
        
        img_req = urllib.request.Request(img_url, headers=headers)
        with urllib.request.urlopen(img_req) as img_resp, open(dest_path, 'wb') as out_file:
          out_file.write(img_resp.read())
        print(f"Successfully saved {filename}!")
      else:
        raise Exception("No valid photo IDs found after filtering.")
    else:
      raise Exception("No photo IDs matched regex in HTML.")
      
    time.sleep(1) # Polite pause to avoid rate limiting
  except Exception as e:
    print(f"Error downloading {filename}: {e}. Saving placeholder fallback.")
    try:
      fallback_url = f"https://placehold.co/800x600/0F1B2D/FFFFFF?text={urllib.parse.quote(filename)}"
      img_req = urllib.request.Request(fallback_url, headers=headers)
      with urllib.request.urlopen(img_req) as img_resp, open(dest_path, 'wb') as out_file:
        out_file.write(img_resp.read())
      print(f"Success: Saved placeholder for {filename}")
    except Exception as fe:
      print(f"Critical error saving fallback for {filename}: {fe}")

print("Unsplash download script complete.")
