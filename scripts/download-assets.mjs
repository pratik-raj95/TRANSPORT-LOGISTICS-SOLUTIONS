import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';

const assets = [
  // Services
  {
    url: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/services/truck-transportation.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/services/trailer-transportation.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/services/tempo-transportation.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/services/container-transportation.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/services/odc-transportation.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/services/vehicle-transportation.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/services/car-transportation.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/services/lorry-transportation.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/services/storage-warehousing.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/services/close-body-truck.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/services/pan-india-logistics.jpg'
  },

  // Fleet
  {
    url: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/fleet/fleet-container-truck.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/fleet/fleet-trailer.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/fleet/fleet-closed-body.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/fleet/fleet-open-body.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/fleet/fleet-tempo.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/fleet/fleet-odc.jpg'
  },

  // Industries
  {
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/industries/industry-manufacturing.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/industries/industry-automotive.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/industries/industry-construction.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/industries/industry-retail-fmcg.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/industries/industry-machinery.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/industries/industry-pharma.jpg'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    function get(currentUrl, redirects = 0) {
      if (redirects > 5) {
        return reject(new Error('Too many redirects for ' + currentUrl));
      }
      const client = currentUrl.startsWith('https') ? https : http;
      client.get(currentUrl, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return get(res.headers.location, redirects + 1);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`Failed with HTTP ${res.statusCode} for ${currentUrl}`));
        }
        const fileStream = fs.createWriteStream(dest);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close(() => {
            const stat = fs.statSync(dest);
            console.log(`Saved ${dest} (${Math.round(stat.size / 1024)} KB)`);
            resolve();
          });
        });
      }).on('error', reject);
    }

    get(url);
  });
}

async function run() {
  console.log(`Downloading ${assets.length} logistics image assets...`);
  for (const asset of assets) {
    try {
      await downloadFile(asset.url, asset.dest);
    } catch (err) {
      console.error(`Error downloading ${asset.dest}:`, err.message);
    }
  }
  console.log('All image downloads completed!');
}

run();
