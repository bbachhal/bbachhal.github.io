---
layout: page
title: OrthoCAD Pro
---

# Advanced Orthotic Design System

Access the full technical report [here](https://docs.google.com/document/d/12flzur0plXTipamo49_YXWJP81IszzX-5IrszjxPEfI/edit?usp=sharing)!

## Overview and Motivations

OrthoCAD Pro was a personal project I developed as an advanced orthotic design system to streamline the creation of custom foot orthoses by integrating biomechanical principles, parametric CAD modeling, and manufacturability constraints. The system was designed to reduce manual design time while improving consistency, repeatability, and fit accuracy for patient-specific orthotics. This project addresses a core engineering challenge: how to encode biomechanical intent, manufacturing constraints, and geometric robustness into a repeatable, automated design pipeline, rather than relying on manual CAD iteration.

The motivation for this project was personal, as many of the elders in my family require orthotic soles for comfortable walking. By creating OrthoCAD Pro, I aimed to provide a framework and strategy for more efficient orthotic design that could be more widely accessible and produced faster than traditional orthotics manufacturing.


### System Architecture and Design Pipeline

The system is structured as a multi-stage pipeline, with each stage enforcing engineering constraints to prevent downstream failures. The first stage, Input Acquisition, captures the foot geometry from either a 3D scan or a parameterized foot profile and interprets it within the model. The second stage, Design Logic, maps biomechanical inputs to orthotic features. The third stage, Parametric CAD Generation, produces fully constrained orthotic geometry. Finally, Manufacturing Validation checks thickness, curvature, and material feasibility, ensuring the design is ready for production. Each stage is designed to be deterministic, repeatable, and tolerant to noisy inputs, reflecting the variability of real-world clinical data.
### Parametric CAD Model Development

I designed the orthotic as a fully parametric CAD model, where all major functional features are driven by explicit design variables rather than manual geometry edits. The key design parameters include arch height and stiffness profile, heel cup depth and wall angle, medial and lateral posting geometry, forefoot thickness and flexibility zones, and overall length, width, and edge taper of the foot. All of these parameters are hierarchically linked to ensure smooth surface continuity, no self-intersections or invalid solids, and predictable response to parameter changes. This entire holistic approach eliminates any fragile CAD behavior and allows rapid regeneration of new designs without manual rework. 

## Biomechanics-Driven Design Logic

Rather than treating the orthotic as a purely geometric shell, I encoded biomechanical intent directly into the design logic. For example, high heel pressure was addressed by increasing heel cup depth and localized thickness, a collapsed arch profile was corrected with an elevated medial arch and gradual stiffness transition, and forefoot load imbalance was mitigated through asymmetric thickness modulation. These encoded solutions within the framework allow for reliable orthotic consultation and diagnosis, provided the foot scan captures the full geometry. This approach ensures that each orthotic is functionally corrective, not just anatomically fitted.

### Manufacturing Constraints and Material Consideration

A major focus of this project was ensuring that all generated designs are manufacturable without manual intervention. This was one of the most challenging aspects, and to develop a solution, I consulted with local orthotics manufacturing experts. Prothotic Laboratories, my local orthotics lab, helped create a list of constraints that I embedded within the design logic. These included minimum and maximum wall thickness, curvature limits to prevent print failures, smooth transitions to reduce stress concentrations, and compatibility with TPU and other flexible polymers. The final output geometry is directly suitable for FDM/SLS additive manufacturing as well as CNC milling from EVA or polymer blanks.


#### Structural and Performance Validation

I validated the system by generating orthotics across a wide range of input profiles and evaluating geometric robustness under extreme parameter combinations, surface smoothness and comfort, consistency of generated designs, and expected load distribution behavior. The system consistently produced dimensionally accurate, structurally sound orthotics without requiring any manual CAD adjustments.


[*back to top*](#)
