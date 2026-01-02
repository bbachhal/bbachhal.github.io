---
layout: default
title: Future for Young Scientists
---

<img src=""/>

# Room Temperature Monitoring System
### Embedded system design integrating sensing, control logic, and manufacturable hardware. 

Access the full technical report [here]()! 
---

## Overview and Motivation

This project was developed to explore how a simple, reliable embedded system can be designed to continuously monitor environmental conditions and provide clear real-time feedback. The motivation was to move beyond simulation or isolated circuits and build a fully integrated hardware system, emphasizing correct component selection, electrical safety, manufacturable wiring, and enclosure integration. By designing the system end-to-end, the project highlights the practical engineering decisions required to translate sensing and control logic into a dependable physical product. 

As a personal note, this project was the true stepping stone for me to get into more complex engineering projects, including The Deskinator and the F1Tenth Autonomous Racecar. Engineering this project was a true process, but falling into wiring, code, and mechanical issues, in my opinion, were essential failures for my learning journey. By the finished product, I was quite proud of the quality of the project, and I now look back at this as one of my most important projects in my undergraduate engineering career. 

---
## System Architecture and Embedded Control

The system is built around a simple Arduino Uno microcontroller, which serves as the central contorl system for sensing, computation, and output logic. An analog TMP36 temperature sensor provides a voltage proportional to ambient temperature, which is read by Arduino's ADC and converted into both Celsius and Fahrenheit values in software. 

Real-time temperature values are displayed on a 16x2 I2C LCD, while embedded logic continuously evaluates whether the measured temperature falls outside the defined 80-90 degrees Fahrenheit "safe" range. When thresholds are exceeded, the Arduino activates both a red LED warning indicator and a piezo buzzer to provide immediate feedback to the user. 

<img src=""/>

Figure 1: Image of the TMP36 Temperature Sensor, a primary component of the Room Temperature Monitor

## Electrical Design and Wiring Implementation

I designed and assembled the full electrical system with a focus on clarity, reliability, and safety. I implemented organized power and signal routing using 22 AWG solid-core wiring. Also, I used heat shrink tubing, twist caps, and spade connectors to ensure durable and clean electrical connections. With this, I applied a consistent color-coding scheme to simplify the debugging and maintenance that I had to do after my preliminary design. Moreover, I integrated an on/off switch and battery clip for standalone operation. This entire system is powered by a simple 9V battery, which supplies the Arduino within its supported input range while also allowing portable untethered use. 

<img src=""/>

Figure 2: A complete schematic of the wiring done on each hardware component of the final project. 

## Component Selection and Electrical Calculations

Choosing the hardware components was obviously one of the first steps I took before manufacturing any electromechanical design for the product. These choices were all driven by electrical constraints and reliability considerations I had set for my final temperature monitor. The TMP36 sensor was selected simply for its linear voltage-to-temperature response and wide operating range. Moreover, the TMP36 is extremely compact and provides for portability for the entire temperature monitoring system. The resistors were sized using Ohm's law to protect LEDS, where the Green LED used a 1 kilo-ohm resistors and the Red LED used a 220 ohm resistor. These resistor calculations and implementation within my electromechanical design ensured all components operated within safe current and voltage limits for constant use with a 9V battery. 

The total system current draw was measured at approximately 80 mA, yielding an estimated 9.5 hours of continuous battery operation, which exceeded my preliminary design calculations and proved that all improvements I did in this process did have a true impact on the success of the product. 

## Mechanical Integration and Enclosure Design

All hardware components were housed into a 3D-printed ABS enclosure, including a dedicating mounting plate for the Arduino and LCD made out of Acryllic using an Epilog Laser Cutter, and internal battery holder and wiring channels made of 3D-printed PLA, and secure fasteners using screws and right-angle connectors. All of this ensured mechancial protection, consistent component placement, and a clean final assembly suitable for repeated handling and testing. At the end of the creation process, the final product was a very functional and aesthetically pleasing room temperature monitor! 

All of the CAD designs were made using OnShape. I chose to use OnShape simply due to it being the only CAD software I had access to at the time. I only got access to SolidWorks and AutoCAD after completing this project. Looking back at it, SolidWorks or AutoCAD would definitely have been an easier and much more helpful CAD software to use for this project. 

<img src=""/>

Figure 3: Final CAD Model of the enclosure and the enclosure lid. Inside the enclosure is the 9V battery holder, and the Arduino Uno mounting plate. On the enclosure lid is the 16x2 I2C LCD screen. 

## Testing, Performance and Validation

The completed prototype was validated through repeated testing and it all demonstrated accurate real-time temperature readings, reliable LCD updates in both Celsius and Fahrenheit, consistent alarm activation outside the 80-90 degrees Fahrenheit range, and stable electrical operation at a 5V internal logic level. Some limitations for this project obviously included the enclosure size. I hoped it would be a bit smaller, but I beleive that if I housed the internal components any different, I would lose organization and understanding of the wiring happening inside the enclosure. Also, the environmental exposure of the sensor would lead it to obtain some sort of error in long-term use. Therefore, finding a sensor more resistant to environmental exposure, or implementing some sort of sensor shielding would create a much more effective product. 

<img src=""/>

Figure 4: Final image of the internal component of the Room Temperature Monitoring System

<img src=""/>

Figure 5: Final image of the entire Room Temperature Monitoring System (Celsius is spelled wrong simply due to an inside joke that was made during the creation of the project!)


[*back to top*](#)
