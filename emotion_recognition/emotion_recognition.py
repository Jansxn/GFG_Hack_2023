import cv2
from deepface import DeepFace
from functools import wraps

cap = cv2.VideoCapture('./vid/vid.mp4')
finalans = []
while(cap.isOpened()):
    ret, frame = cap.read()
    try:
        result = DeepFace.analyze(frame, actions = ['emotion'])
        finalans.append(result[0]['dominant_emotion'])
        # print(result[0]['dominant_emotion'])
    except:
        pass
    cv2.imshow('frame', frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

print(finalans)
# After the loop release the cap object
cap.release()
# Destroy all the windows
cv2.destroyAllWindows()