
/*
// Welcome to SuperCollider and to the Live coding workshop at Eastern Bloc,
// this file will help you to start SuperCollider and listen to TidalCycles in order to produce sound.

include("SuperDirt")

*/

// SuperDirt.start is the line we need to evaluate before every time we want to play with TidalCycles,
// it basically boot the server and allows SuperDirt to listen TidalCycles on port 57120. -

SuperDirt.start

/* The two last lines are what you need to run SuperDirt, but I also find useful to share in this file
an alternative way to start SuperDirt listening to an specific folder with samples.
*/


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// s.quit and Server.killAll; are useful to stop SuperCollider in case of an error.
s.quit;
Server.killAll;
// The following lines are useful to visualize the sound output of SC.-
s.meter(0,2);
s.scope;
s.makeGui; // This one is good to record and have knowledge of what's going on in the Server.

(
s.boot;
// configure the sound server: here you could add hardware specific options
// see http://doc.sccode.org/Classes/ServerOptions.html
s.options.numBuffers = 1024 * 16; // increase this if you need to load more samples
s.options.memSize = 8192 * 16; // increase this if you get "alloc failed" messages
s.options.maxNodes = 1024 * 32; // increase this if you are getting drop outs and the message "too many nodes"
s.options.numOutputBusChannels = 2; // set this to your hardware output channel size, if necessary
s.options.numInputBusChannels = 2; // set this to your hardware output channel size, if necessary
// boot the server and start SuperDirt
s.waitForBoot {
    ~dirt = SuperDirt(2, s); // two output channels, increase if you want to pan across more channels
    //~dirt.loadSoundFiles;
	//~dirt.loadSoundFiles("/Users/velasco_/Dirt/samples_perc"); // éste folder es donde tenemos nuestros sampleos ( .
//~dirt.loadSoundFiles("/Users/velasco_/Dirt/Dirt-Samples-master/*");
	~dirt.loadSoundFiles("/Users/velasco_/Dirt/sampleos/*");
	// load samples (path can be passed in. You can drag and drop folders into the editor.)
	s.sync; // wait for samples to be read
    //~dirt.start(57120, [0, 0]);   // start listening on port 57120, create two busses each sending audio to channel 0
    ~dirt.start(57120, 0 ! 8);
}
)


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


