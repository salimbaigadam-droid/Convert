let midiData = null;

const midiInput = document.getElementById("midiFile");

midiInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const arrayBuffer = e.target.result;
            midiData = new Midi(arrayBuffer); // Tone.js MIDI parser
            console.log("MIDI Parsed:", midiData);
            alert("MIDI loaded successfully!");
        } catch (err) {
            console.error("Error parsing MIDI:", err);
            alert("Failed to parse MIDI file.");
        }
    };
    reader.readAsArrayBuffer(file);
});

// Export the midiData for other modules
export { midiData };