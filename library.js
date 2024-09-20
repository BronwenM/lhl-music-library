const library = {
	tracks: {
		t01: {
			id: "t01",
			name: "The Code Monkey",
			artist: "Jonathan Coulton",
			album: "Thing a Week Three"
		},
		t02: {
			id: "t02",
			name: "Model View Controller",
			artist: "James Dempsey",
			album: "WWDC 2003"
		},
		t03: {
			id: "t03",
			name: "Four Thirty-Three",
			artist: "John Cage",
			album: "Woodstock 1952"
		}
	},
	playlists: {
		p01: {
			id: "p01",
			name: "Coding Music",
			tracks: ["t01", "t02"]
		},
		p02: {
			id: "p02",
			name: "Other Playlist",
			tracks: ["t03"]
		}
	},

	/* FUNCTION METHODS */
	// prints a list of all playlists, in the form:
	// p01: Coding Music - 2 tracks
	// p02: Other Playlist - 1 tracks
	printPlaylists: function () {
		for (const pl in this.playlists) {
			let playlist = this.playlists[pl];
			let playlistData = `${playlist.id}: ${playlist.name} - ${playlist.tracks.length} track${playlist.tracks.length > 1 ? "s" : ''}`;
			console.log(playlistData);
		}
	},

	// prints a list of all tracks, using the following format:
	// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
	// t02: Model View Controller by James Dempsey (WWDC 2003)
	// t03: Four Thirty-Three by John Cage (Woodstock 1952)
	printTracks: function () {
		for (const tr in this.tracks) {
			let track = this.tracks[tr];
			const trackData = `${track.id}: ${track.name} by ${track.artist} (${track.album})`;
			console.log(trackData);
		}
	},

	// prints a list of all tracks, using the following format:
	// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
	// t02: Model View Controller by James Dempsey (WWDC 2003)
	// t03: Four Thirty-Three by John Cage (Woodstock 1952)
	printTracks: function () {
		for (const tr in this.tracks) {
			let track = this.tracks[tr];
			const trackData = `${track.id}: ${track.name} by ${track.artist} (${track.album})`;
			console.log(trackData);
		}
	},

	// prints a list of tracks for a given playlist, using the following format:
	// p01: Coding Music - 2 tracks
	// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
	// t02: Model View Controller by James Dempsey (WWDC 2003)
	printPlaylist: function (playlistId) {
		const playlist = this.playlists[playlistId];

		console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} track${playlist.tracks.length > 1 ? "s" : ''}`);

		for (const tr of playlist.tracks) {
			let track = this.tracks[tr];
			const trackData = `${tr}: ${track.name} by ${track.artist} (${track.album})`;
			console.log(trackData);
		}
	},

	// adds an existing track to an existing playlist
	addTrackToPlaylist: function (trackId, playlistId) {
		const playlist = this.playlists[playlistId];
		const track = this.tracks[trackId];

		if (playlist && track) {
			playlist.tracks.push(trackId);
		}
	},

	// generates a unique id
	// (already implemented: use this for addTrack and addPlaylist)
	generateUid: function () {
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	},

	// adds a track to the library
	addTrack: function (name, artist, album) {
		const tracks = this.tracks;
		const trackId = this.generateUid();

		tracks[trackId] = {
			id: trackId,
			"name": name,
			"artist": artist,
			"album": album
		};

		console.log(this.tracks);
	},

	// adds a playlist to the library
	addPlaylist: function (name) {
		const playlists = this.playlists;
		const plID = this.generateUid();

		playlists[plID] = {
			id: plID,
			"name": name,
			tracks: []
		};

		console.log(playlists);
	},

	// STRETCH:
	// given a query string string, prints a list of tracks
	// where the name, artist or album contains the query string (case insensitive)
	// tip: use "string".search("tri")
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
	printSearchResults: function (query) {
		let res = [];
		const q = query.toLowerCase();

		for (const tr in this.tracks) {
			const track = this.tracks[tr];
			if (track.name.toLowerCase().includes(q) || track.artist.toLowerCase().includes(q) || track.album.toLowerCase().includes(q)) res.push(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
		}

		console.log(res);
	}

};

library.printPlaylists();
library.printTracks();
library.printPlaylist("p01");
library.addTrackToPlaylist("t03", "p01");
library.addTrack("Caesar on a TV Screen", "The Last Dinner Party", "Caesar on a TV Screen");
library.addPlaylist("Soft & Indie");
library.printSearchResults("The");