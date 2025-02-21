// Scales definition (intervals in semitones)
const scales = {
    major: [2, 4, 5, 7, 9, 11, 12],      // Major scale intervals
    minor: [2, 3, 5, 7, 8, 10, 12],      // Natural Minor scale intervals
    pentatonic: [2, 4, 7, 9, 12]         // Pentatonic scale intervals
  };
  
  // Note order for generating scales
  const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  
  function generateScale() {
    const root = document.getElementById('root').value;
    const scaleType = document.getElementById('scale').value;
    
    const rootIndex = notes.indexOf(root);
    const scaleIntervals = scales[scaleType];
  
    let scale = [root];  // Starting with root note
    let currentIndex = rootIndex;
  
    // Generate the scale based on intervals
    for (let i = 0; i < scaleIntervals.length; i++) {
      currentIndex = (currentIndex + scaleIntervals[i]) % notes.length;
      scale.push(notes[currentIndex]);
    }
  
    // Display the generated scale
    document.getElementById('scale-display').innerText = scale.join(' - ');
  }
  
  // Initialize the scale display
  generateScale();