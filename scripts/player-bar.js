{
  $('button#play-pause').on('click', function() {
    const totalTime = player.currentlyPlaying.duration;
    $('#time-control .total-time').text( totalTime );
    player.playPause();
     $(this).attr('playState', player.playState);
  });

   $('button#next').on('click', function() {
     $('#time-control .total-time').text( nextSong.duration );
     if (player.playState !== 'playing') { return; }
     const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
     const nextSongIndex = currentSongIndex + 1;
     if (nextSongIndex >= album.songs.length) { return; }
     const nextSong = album.songs[nextSongIndex];
     player.playPause(nextSong);
   });

   $('button#previous').on('click', function() {
     $('#time-control .total-time').text( nextSong.duration );
     if (player.playState !== 'playing') { return; }
     const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
     const nextSongIndex = currentSongIndex - 1;
     if (nextSongIndex >= album.songs.length) { return; }
     const nextSong = album.songs[nextSongIndex];
     player.playPause(nextSong);
   });

   $('#time-control input').on('input', function (event) {
      player.skipTo(event.target.value);
   });

   $('#volume-control input').on('input', function (event) {
      player.setVolume(event.target.value);
   });



   setInterval( () => {
     if (player.playState !== 'playing') { return; }
     const currentTime = player.getTime();
     const duration = player.getDuration();
     const percent = (currentTime / duration) * 100;
     $('#time-control .current-time').text( currentTime );
      $('#time-control input').val(percent);
   }, 1000);



}
