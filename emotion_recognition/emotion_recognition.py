from deepface import DeepFace
import cv2

cap = cv2.VideoCapture(0)
  
while(True):
    ret, frame = cap.read()
    try:
        result = DeepFace.analyze(frame, actions = ['emotion'])
        print(result[0]['dominant_emotion'])
    except:
        print("Face not found")
    cv2.imshow('frame', frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
  
# After the loop release the cap object
cap.release()
# Destroy all the windows
cv2.destroyAllWindows()