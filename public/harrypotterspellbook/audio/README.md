# Score

`AmbientScore.tsx` looks for `theme.mp3` in this folder on load.

- **File present** → it loops that file at 35% volume.
- **No file** → it synthesises an original ambient score with the Web Audio API.

To use your own music, drop a file you hold a licence for at
`public/audio/theme.mp3`. Commercial film scores (e.g. tracks from the Harry
Potter films) are copyrighted and are not distributable with this project.
