import time
import RPi.GPIO as GPIO
import subprocess
import os

GPIO.setmode(GPIO.BCM) #set GPIO to Broadcom mode
GPIO.setup(27,GPIO.IN,pull_up_down=GPIO.PUD_UP) #set GPIO pull up mode
GPIO.setup(17,GPIO.IN,pull_up_down=GPIO.PUD_UP) #set GPIO pull up mode
GPIO.setup(22,GPIO.IN,pull_up_down=GPIO.PUD_UP) #set GPIO pull up mode
GPIO.setup(23,GPIO.IN,pull_up_down=GPIO.PUD_UP) #set GPIO pull up mode

done = False
#7.65--6.75--5.85
MID=6.75
CONTROL_IO = 5 # left wheel
CONTROL_IO2 = 6 # right wheel
STOP_DUTY=0
GPIO.setup(CONTROL_IO, GPIO.OUT)
GPIO.setup(CONTROL_IO2, GPIO.OUT)
p = GPIO.PWM(CONTROL_IO, 45)# fequency is HZ
p2 = GPIO.PWM(CONTROL_IO2, 45)# fequency is HZ
p.start(STOP_DUTY)# stop
p2.start(STOP_DUTY)# stop

START_TIME=time.time()

# def GPIO27_callback(channel):
def stop1():  #stop left
    p.ChangeDutyCycle(STOP_DUTY)

def back1():  #left roll backward
    p.ChangeDutyCycle(MID+(7.65-MID)/2)

def fwd1():  # left roll forward
    p.ChangeDutyCycle(MID-(MID-5.85)/2)

def back2():   # right roll backward
    p2.ChangeDutyCycle(MID+(7.65-MID)/2)

def fwd2():   # right roll forward
    p2.ChangeDutyCycle(MID-(MID-5.85)/2)

def stop2():    # right stop
    p2.ChangeDutyCycle(STOP_DUTY)

done=False
last_time=time.time()

def fwd():
    back1()
    fwd2()

def back():
    fwd1()
    back2()

def stop():
    stop1()
    stop2()

def turnL():# turn for 10 degree
    fwd2()
    fwd1()

def turnR():# turn for 10 degree
    back1()
    back2()

move_stack=[]
time_stack=[]

f=open("../cmd", "r")

while not done:
    line=f.readline()
    if len(line)<1:# read FIFO if empty sleep for some time else call move function
        time.sleep(1)
    else: # valid input
        if line=="fwd\n":
            fwd()
        elif line=="back\n":
            back()
        elif line=="left\n":
            last_time=time.time()
            turnL()
            while time.time()-last_time<1:
                pass
            stop()
        elif line=="right\n":
            last_time=time.time()
            turnR()
            while time.time()-last_time<1:
                pass
            stop()            
        elif line=="stop\n":
            stop()
        
    
        #record moving time and method (front and back)

p.stop()
p2.stop()
GPIO.cleanup()
quit()
    