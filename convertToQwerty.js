import { midiData } from "./parseMidi.js";
import { robloxPianoMap } from "./robloxKeyMap.js";

const convertBtn = document.getElementById("convertBtn");
const outputBox = document.getElementById("output");

convertBtn.addEventListener("click", () => {
    if (!midiData) {
        alert("Upload a MIDI first!");
        return;
    }

    let qwertyOutput = "";

    midiData.tracks.forEach(track => {
        track.notes.forEach(note => {
            const midiNumber = note.midi;
            const key = robloxPianoMap[midiNumber] || "";
            if (key) qwertyOutput += key + " ";
        });
    });

    outputBox.textContent = qwertyOutput.trim() || "[no notes]";
});