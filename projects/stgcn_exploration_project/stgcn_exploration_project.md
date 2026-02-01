---
layout: page
title: The Deskinator
---

<img src="Deskinator_Main.png"/>

# The Deskinator
### An Autonomous Desktop-Cleaning Robot
Role: Mechanical and Robotics Systems Lead
Focus: Electromechanical Design, Motion Systems, Embedded Hardware, Autonomous Navigation

Access The Deskinator Video [here](https://drive.google.com/file/d/17UYgUKBP8n6Xr2Mj3MLHvpmgbl_ftx7z/view?usp=sharing)! 


Access the full technical report [here](https://docs.google.com/document/d/1J7fj0Xwd_tkpN8rXVOZPwmj2ORiROpX2GtS6bQvDz3A/edit?usp=sharing)! 
---

## Overview and Motivations

This project explores how an autonomous electromechanical system can be designed to reliably perform full-surface coverage in a constrained, human-facing environment. The Deskinator was built to translate motion-planning and autonomy concepts into a physically robust, low-cost robot, emphasizing safe operation, repeatable performance, and real-world reliability. The motivation behind this project was simple: there is a need to translate theoretical autonomy and motion-planning concepts into physically realizable systems that operate consistently under real-world constraints. As a student, my desk is everything to me, from a place to complete classwork to a space where I eat lunch and watch my favorite films and YouTube videos. Therefore, the most efficient and applicable use of an autonomous system for my circumstances was this desktop-cleaning robot, the Deskinator, that we designed.

By designing, building, and testing a fully autonomous desktop-cleaning robot, this project investigates how electromechanical architecture, motor control strategies, and sensor integration influence system reliability and coverage performance. Beyond demonstrating autonomy, the project emphasizes repeatability, manufacturability, and robustness, bridging the gap between academic robotics concepts and deployable engineering solutions. The findings are relevant not only to autonomous service robotics but also to manufacturing and product development contexts where consistent performance under real-world variability is essential.

In summary, the Deskinator is a fully autonomous desktop-cleaning robot designed to safely and efficiently clean desks without human intervention. Operating on a desktop surface, the robot autonomously detects boundaries, plans coverage paths, and removes debris using a custom vacuum system, all within strict time, safety, and cost constraints.

---
## My Contributions

### Electromechanical Design and Wiring Architecture

I designed and manufactured each mechanical component of the Deskinator, including the chassis, bumper system, vacuum sweep system, and wheels. I also designed and implemented the robot’s electrical system, integrating motors, sensors, power, and computing hardware into a compact, serviceable layout. As shown in Figure 2, I developed the full wiring architecture for all hardware components within the Deskinator. I integrated dual power rails (12 V and 5 V) to separately power high-load actuators and sensitive electronics. Additionally, I routed wiring to minimize EMI and mechanical strain during motion while ensuring modularity for debugging, replacement, and testing. All of this was accomplished with careful consideration of space constraints, serviceability, noise isolation, and reliability over repeated testing cycles. 

<img src="Deskinator_Assem.png"/>

Figure 1: CAD of Deskinator's Assembly

<img src="Deskinator_Fristing.png"/>

Figure 2: Full wiring schematic of The Deskinator 

### Motor Selection and Drive System Engineering

I selected and integrated NEMA 17 stepper motors paired with A4988 stepper drivers to achieve precise, repeatable motion while maintaining desk-safe operation. During development, we made slight adjustments to our initial electromechanical design, replacing an initial DC motor + H-bridge setup after identifying thermal foldback and a loss of microstepping in our earlier design.

We chose the A4988 current-limited drivers because they maintain a stable sinusoidal phase current under load, keeping our motors at a consistent microstepping limit for efficient and precise operation. Prior to selecting the NEMA 17 motors, we conducted extensive testing to measure angular error over time, prioritizing repeatability and accuracy. Many of the stepper motors we tested did not meet the small angular error required for safe operation. As shown in Figure 3, the NEMA 17 motors exhibited minimal angular error, making them ideal for our design.

The result of this combination of Nema 17 stepper motors and A4988 drivers was smooth, jitter-free differential drive motion with reliable odometry for autonomous navigation. 

<img src="Deskinator_NEMAmodeling.png"/>

Figure 3: Preliminary testing of the NEMA 17 stepper motors' angular error. This plot shows simply how precise these motors were, with an error extremely close to 0. Also shown are basic statistics regarding the angular error. 

### Sensor Integration and Embedded Hardware Debugging

Selecting sensors required careful consideration, as precision and accuracy were critical to the success of our design. Our SLAM algorithm relies directly on front-facing sensors to provide accurate edge detection and obstacle avoidance for the robot’s mobility. After testing and experimenting with various infrared and proximity sensors, we selected the APDS9960 proximity sensors as our primary edge-detection hardware. Data from testing the APDS9960 is shown in Figure 4.

While edge detection was the primary application, we also used one APDS9960 sensor in the final design for gesture-based, touchless activation. As shown in Figure 5, the sensors were mounted on external "flaps" extending from the main frame of the Deskinator, allowing the robot to detect the edges of the desktop before its body reaches them. The central compute unit for this sensor setup was a Raspberry Pi 4B.

<img src="Deskinator_APDStest.png"/>

Figure 4: A chart showing the preliminary testing done on the APDS9960 proximity sensor showing the effectiveness of the sensor at various distances from an obstacle. 

<img src="Deskinator_sensorcad.png"/> 

Figure 5: CAD modeling of the sensor mounts. These flaps are located at the front of the deskinator's main frame. Refer to Figure 1 for their relative placement within the Deskinator assembly.

### Custom Vacuum and Mechanical Integration

Of all the systems I designed for the Deskinator, the vacuum system was the most challenging due to the complexity of the overall design. However, our final vacuum system functioned flawlessly. The design consisted of a vacuum scoop mounted on the bottom of the robot’s main frame, powered by a 12 V DC fan. A custom chute geometry directed debris into a removable container at the bottom of the system. Because this system is difficult to describe in words, please refer to the video linked in the overview section for a demonstration.

This system was key to achieving the accessibility and usability goals of the Deskinator. Our aim was to make the robot as easy to use as possible, minimizing maintenance, manual movement, and manual control. The chute system with its detachable container accomplished this, and testing showed 99.4% debris removal while staying within project cost and weight limits. Figure 6 shows the design of the chute system as viewed from the bottom of the robot.

<img src='Deskinator_vacuumCAD.png'/>

Figure 6: CAD drawing of the vacuum system on The Deskinator.

### Manufacturing Process

After completing the design process, I began manufacturing each component of the Deskinator. I started with the wheels, which were laser-cut from stock plywood using an Epilog Laser Cutter/Engraver and then covered with simple rubber tread. Next, the main body of the robot was 3D-printed in PLA using an FDM printer. The mounting plate for the hardware was made from acrylic with the Epilog Laser Cutter, and each hardware component was secured with M3 hex screws.

Other components—including the sensor flaps, vacuum system (chute and detachable container), battery holder, NEMA 17 motor mounts, and fan mounts—were 3D-printed in PLA using a Bambu Lab FDM printer. All components were first prototyped in cardboard and wood to evaluate their effectiveness and identify opportunities for design improvement before final fabrication.

---

## Autonomous Navigation and Coverage Planning

### Localization and SLAM Integration

While my work focused primarily on hardware and manufacturing, I collaborated closely with the software team to ensure that mechanical design decisions supported the Deskinator’s autonomy. I also contributed to the localization and SLAM pipeline, enabling the robot to estimate its position on the desk in real time and execute repeatable coverage paths. The system combined wheel odometry with IMU data using an Extended Kalman Filter (EKF) to reduce drift and maintain stable pose estimates during operation.

I was specifically responsible for ensuring that the SLAM approach aligned with the robot’s mechanical and sensing limitations, including wheel slip, motor resolution, and sensor noise. Through iterative testing, I tuned filter parameters and motion constraints to improve localization stability, allowing the robot to maintain accurate positioning over full cleaning cycles without external markers or beacons. The figures below show some of the testing and simulations conducted to analyze the motion of the Deskinator.

<img src="Deskinator_wallfollower.png"/>

Figure 7: Example of Wall Follower used to compute boundary based on found edges. This path was our initialization path. 

<img src="Deskinator_lawnmower.png"/>

Figure 8: Example of computed and followed Boustrophedon path. This "lawn-mower" like path was our cleaning path. 

<img src="Deskinator_time.png"/>  

Figure 9: Graphs of Distribution of Time to complete boundary, discovery and total times, with Gaussian fitting. 

[*back to top*](#)
