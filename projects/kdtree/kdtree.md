---
layout: default
title: OrthoCAD Pro
---

# Advanced Orthotic Design System

## Overview and Motivations

OrthoCAD Pro was a personal project of mine, and it is an advanced orthotic design system developed to streamline the creation of custom foot orthoses by combining biomechanical principles, parametric CAD modeling, and manufacturability constraints. THe system was designed to reduce manual design time while improving consistency, repeatability and fit accuracy for patient-specific orthotics. This project focuses on a core engineering challenge: how to encode biomechanical intent, manufacturing constraints, and geometric robustness into a repeatable, automated design pipeline, rather than relying on manual CAD iteration. 

The motivations for this project were quite apparent for me, as almost all of the elders in my family require orthotic soles in their shoes to walk comfortability. This problem that I attempted to tackle through the creation of OrthoCAD pro hit close to home, and hopefully its creation can provide a framework and strategy to create more efficient orthotics work that could be accessible to the public quicker than traditional orthotics manufacturing. 


### System Architecture and Design Pipeline

The system is structured as a multi-stage pipeline, where each stage enforces engineering constraints to prevent downstream failure: The first stage is Input Acquisition, where the foot geometry (3D scan or parametrized foot profile) is taken and understood by the created model. THen there is the design logic layer where there is parameter mapping betweeen biomechanical inputs and orthotic features. Then there is Parametric CAD generation, where there is fully constrained orthotic geometry being created. Finally, there is manufacturing validation, where the thickness, curvature, and material feasability checks are done and are ready to go for manufacturing. Each stage was designed to be deterministic, repeatable, and tolerant to noisy inputs, mirroring real-world clinical data. 

### Parametric CAD Model Development

I designed the orthotic as a fully parametric CAD model, where all major functional features are driven by explicit design variables rather than manual geometry edits. The key design parameters include arch height and stiffness profile, heel cup depth and wall angle, medial and lateral posting geometry, forefoot thickness and flexibility zones, and overall length, width, and edge taper of the foot. All of these parameters are hierarchically linked to ensure smooth surface continuity, no self-intersections or invalid solids, and predictable response to parameter changes. This entire holistic approach eliminates any fragile CAD behavior and allows rapid regeneration of new designs without manual rework. 

## Biomechanics-Driven Design Logic

Rather than treating the orthotic as a purely geometric shell, I encoded biomechanical intent directly into the design logic. For example, for high heel pressure, the solution implemented in the logic design was increased heel cup depth and localized thickness. For a collapsed arch profile, the solution implemented was elevated medial arch geometry with gradual stiffness transition. For forefoot load imbalance, the implemented solution was asymmetric thickness modulation. All of these encoded solutions withen the framework allowed for foolproof orthotics consultation and diagnosis, given that the image taken of the foot is one that encapsulates the entire foot geometry. This all ensures that each orthotic is functionally corrective, not just anatomically fitted. 

### Manufacturing Constraints and Material Consideration

A major focus of this project was ensuring that all of the generated designs are manufacturable without manual intervention. This was most definitely the most difficult aspect of the process, and for a solution, I had to ask for advice from local manufacturing sites that specialize in orthotics. Prothotic Laboratories, which is my local orthotics manufacturing lab, helped me create a list of constraints that I embedded within my design logic. I embedded constraints for minimum and maximum wall thickness, curvature limits to prevent any print failures, smooth transitions to reduce stress concentrations, and compatability with TPU and any other flexible polymer materials. The final output geometry is directly suitable for FDM/SLS additive manufacturing and CNC milling from EVA or polymer blanks. 

#### Structural and Performance Validation

I validated the system by generating orthotics across a wide range of input profiles and evaluating their geometric robustness under extreme parameter combinations, surface smoothness and comfort zones, consistency of generated designs, and expected load distribution behavior. The system consistently produced dimensionally valid, structurally sound orthotic designs without requiring any manual CAD correction. 


[*back to top*](#)
