const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
zokou({
  'nomCom': "video",
  'categorie': "Search",
  'reaction': '🎥'
}, async (_0x378263, _0x4a1d8d, _0x59f4af) => {
  const {
    ms: _0x372df1,
    repondre: _0x39e5f7,
    arg: _0x311d1f
  } = _0x59f4af;
  if (!_0x311d1f[0x0]) {
    _0x39e5f7("Please insert a song/video name.");
    return;
  }
  try {
    let _0x339981 = _0x311d1f.join(" ");
    let _0x277bf6 = [];
    const _0x39f3a9 = await yts(_0x339981);
    _0x277bf6 = _0x39f3a9.videos;
    if (_0x277bf6 && _0x277bf6.length > 0x0) {
      const _0x4f5867 = _0x277bf6[0x0].url;
      const _0x4c8e2f = await fetch("https://api-gifted-tech.onrender.com/api/download/ytmp4?url=" + encodeURIComponent(_0x4f5867) + "&apikey=" + 'ibrahimtech_ai');
      const _0x9ae1c5 = await _0x4c8e2f.json();
      if (_0x9ae1c5.status === 0xc8 && _0x9ae1c5.success) {
        const _0x14e0b8 = _0x9ae1c5.result.download_url;
        const _0x4e9e71 = {
          'image': {
            'url': _0x277bf6[0x0].thumbnail
          },
          'caption': "CALL ME\n\n © THADDY"
        };
        await _0x4a1d8d.sendMessage(_0x378263, _0x4e9e71, {
          'quoted': _0x372df1
        });
        await _0x4a1d8d.sendMessage(_0x378263, {
          'video': {
            'url': _0x14e0b8
          },
          'mimetype': "video/mp4"
        }, {
          'quoted': _0x372df1
        });
        _0x39e5f7("Downloded Successfully I'M THADDY ✅");
      } else {
        _0x39e5f7('Searching...⏳');
      }
    } else {
      _0x39e5f7("No videos found.");
    }
  } catch (_0x5d56ce) {
    console.error("Error from API:", _0x5d56ce);
    _0x39e5f7("Searching...⏳");
  }
});
zokou({
  'nomCom': 'play',
  'categorie': "Download",
  'reaction': '🎧'
}, async (_0x5907cc, _0x9b0e3f, _0x533f2) => {
  const {
    ms: _0x848f3d,
    repondre: _0x2482ca,
    arg: _0x4723fc
  } = _0x533f2;
  if (!_0x4723fc[0x0]) {
    _0x2482ca("Please insert a song name.");
    return;
  }
  try {
    let _0x5d5f82 = _0x4723fc.join(" ");
    let _0x5769b7 = [];
    const _0x40b93d = await yts(_0x5d5f82);
    _0x5769b7 = _0x40b93d.videos;
    if (_0x5769b7 && _0x5769b7.length > 0x0) {
      const _0x4ce76e = _0x5769b7[0x0].url;
      const _0x7ee3b9 = await fetch("https://api-gifted-tech.onrender.com/api/download/ytmp3?url=" + encodeURIComponent(_0x4ce76e) + "&apikey=" + 'ibrahimtech_ai');
      const _0x511182 = await _0x7ee3b9.json();
      if (_0x511182.status === 0xc8 && _0x511182.success) {
        const _0x9b3606 = _0x511182.result.download_url;
        const _0x3e42f7 = {
          'image': {
            'url': _0x5769b7[0x0].thumbnail
          },
          'caption': "CALL ME\n\n © THADDY"
        };
        await _0x9b0e3f.sendMessage(_0x5907cc, _0x3e42f7, {
          'quoted': _0x848f3d
        });
        await _0x9b0e3f.sendMessage(_0x5907cc, {
          'audio': {
            'url': _0x9b3606
          },
          'mimetype': 'audio/mp4'
        }, {
          'quoted': _0x848f3d
        });
        _0x2482ca("Downloded Successfully I'M THADDY ✅");
      } else {
        _0x2482ca("Failed to download audio. Please try again later.");
      }
    } else {
      _0x2482ca("No audio found.");
    }
  } catch (_0x3d1771) {
    console.error("Error from API:", _0x3d1771);
    _0x2482ca("An error occurred while searching or downloading the audio.");
  }
});
zokou({
  'nomCom': "song",
  'categorie': "Download",
  'reaction': '🎸'
}, async (_0xcb1366, _0x5f3131, _0x44c589) => {
  const {
    ms: _0x2a7931,
    repondre: _0x4826c7,
    arg: _0x3ec13b
  } = _0x44c589;
  if (!_0x3ec13b[0x0]) {
    _0x4826c7("Please insert a song name.");
    return;
  }
  try {
    let _0x2e1359 = _0x3ec13b.join(" ");
    let _0x4b0ccc = [];
    const _0x423a9b = await yts(_0x2e1359);
    _0x4b0ccc = _0x423a9b.videos;
    if (_0x4b0ccc && _0x4b0ccc.length > 0x0) {
      const _0x5b2ebb = _0x4b0ccc[0x0].url;
      const _0x492ebc = await fetch('https://api-gifted-tech.onrender.com/api/download/ytmp3?url=' + encodeURIComponent(_0x5b2ebb) + "&apikey=" + "ibrahimtech_ai");
      const _0x4ffab6 = await _0x492ebc.json();
      if (_0x4ffab6.status === 0xc8 && _0x4ffab6.success) {
        const _0x2d9cbe = _0x4ffab6.result.download_url;
        const _0x2de7b2 = {
          'image': {
            'url': _0x4b0ccc[0x0].thumbnail
          },
          'caption': "CALL ME\n\n © THADDY"
        };
        await _0x5f3131.sendMessage(_0xcb1366, _0x2de7b2, {
          'quoted': _0x2a7931
        });
        await _0x5f3131.sendMessage(_0xcb1366, {
          'audio': {
            'url': _0x2d9cbe
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x2a7931
        });
        _0x4826c7("Downloded Successfully I'M THADDY ✅");
      } else {
        _0x4826c7("Failed to download audio. Please try again later.");
      }
    } else {
      _0x4826c7("No audio found.");
    }
  } catch (_0x1a8901) {
    console.error("Error from API:", _0x1a8901);
    _0x4826c7("An error occurred while searching or downloading the audio.");
  }
});
