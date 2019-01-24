<template>

  <Page class="page">
  
    <ActionBar title="Speech Recognize">
      <CustomBar titleBar="Speech Recognize"></CustomBar>
    </ActionBar>

    <GridLayout>
      
			<GridLayout class="content p-x-16">
        <StackLayout>
          <!-- <Button @tap="showDialog()">ShowDialog</Button> -->
            <StackLayout >
              <StackLayout>
                <Label textWrap="true" class="p-y-16 p-r-16 body" ref="transcriptionLbl">プログラマ</Label>
                <!-- <Button @tap="showDialog()">ShowDialog</Button> -->
                <StackLayout horizontalAlignment="center" orientation="horizontal">
                  <Ripple 
                    rippleColor="#fff" 
                    backgroundColor="#4caf50" 
                    borderRadius="20" 
                    horizontalAlignment="center" 
                    height="40" 
                    width="40"
                    @tap="hear()"
                    class="m-5"
                    
                    >
                    <Label 
                      :text="'fa-volume-up' | fonticon" 
                      class="fa text-center" 
                      fontSize="20" 
                      color="#fff" 
                      verticalAlignment="center" 
                      horizontalAlignment="center" 
                      textWrap="true"/>
                  </Ripple>
                  <Ripple 
                    class="m-5"
                    @tap="pause()"
                    rippleColor="#fff" 
                    backgroundColor="#f44336" 
                    borderRadius="20" 
                    horizontalAlignment="center" 
                    height="40" 
                    width="40"
                    >
                    <Label 
                      :text="'fa-volume-off' | fonticon" 
                      class="fa text-center" 
                      fontSize="20" 
                      color="#fff" 
                      verticalAlignment="center" 
                      horizontalAlignment="center" 
                      textWrap="true"/>
                  </Ripple>
                </StackLayout>
                
              
              <Ripple 
                @tap="listen()"
                rippleColor="#fff" 
                backgroundColor="#4caf50" 
                borderRadius="20" 
                horizontalAlignment="center" 
                height="40" 
                width="40"
                >
                <Image stretch="aspectFill" src="~/assets/images/mic-48.png"></Image>
              </Ripple>
                
              </StackLayout>
          </StackLayout>
        </StackLayout>
        
			</GridLayout>

			
      
		</GridLayout>





  </Page>
</template>

<script>
  import CustomBar from './CustomBar';
  let listComponents = { CustomBar }
  import { SpeechRecognition, SpeechRecognitionTranscription, SpeechRecognitionOptions } from "nativescript-speech-recognition";
  var TextToSpeech = require("nativescript-texttospeech");
  export default {
    data() {
        return {
           TTS: new TextToSpeech.TNSTextToSpeech(),
        }
    },
    created() {
        this.init();      
    },
    mounted() {
        console.log('======')
      let speechRecognition = new SpeechRecognition();

      speechRecognition.requestPermission().then((granted) => {
          if (!granted){
              alert("It seems that you haven't enabled the microphone. Please visit your app settings and let this app listen to your voice!")
          } else {
            //alert('ok')

          }
      });
    },
    components: listComponents,
    methods: {
      init() {
        let speechRecognition = new SpeechRecognition()
        speechRecognition.available().then(
        function(available) {
        });
      },
      requestPermission() {
        speechRecognition.requestPermission().then((granted) => {
      })
      },
      listen() {
        let speechRecognition = new SpeechRecognition()
        speechRecognition.startListening( {
            onResult: (transcription) => {
              this.$refs.transcriptionLbl.nativeView.text = transcription.text;
            },
            returnPartialResults: true,
            locale: 'vi-VN'
        }).then((started) => {}, (errorMessage) => {
            console.log(`Error while trying to start listening: ${errorMessage}`);
        });
      },
      hear() {
        
        var speakOptions = {
            text: this.$refs.transcriptionLbl.nativeView.text,
            speakRate: 0.8,
            pitch: 1.0,
            volume: 1.0,
            locale: "ja-JP",
            finishedCallback: Function // optional
        };
        this.TTS.speak(speakOptions).then(function () {
            console.log('see great')
        }, function (err) {
            console.log('wrong...')
        });
      },
      pause() {
        this.TTS.pause()
      },
      resume() {
        this.TTS.resume()
      },
      
        
    }
  };
</script>
<style scoped>

</style>
