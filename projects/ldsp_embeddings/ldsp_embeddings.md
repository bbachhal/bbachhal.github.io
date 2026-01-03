---
layout: default
title: ECG Signal Processing and Heart Rate Variability Analysis
---

<img src="ECG_COMPARE.png"/>

# ECG Signal Processing and Heart Rate Variability Analysis
### Biomedical Signal Analysis using MATLAB

---

## Overview and Motivations

This project investigates how physiological states influence cardiac behavior by analyzing real-world electrocardiogram (ECG) data. Using MATLAB, I processed and analyzed three-lead ECG recordings collected under resting, post-exercise, and controlled breathing conditions to quantify changes in heart rate variability (HRV) and cardiac cycle dynamics. 

As a student with an interest in medical technologies, I wanted to look at and analyze issues and areas in medicine where there is possibility for growth using engineering and device manufacturing. One of these areas was heart rate variability and the indication of severe heart diseases. Heart rate variability is a key indicator of autonomic nervous system activity and cardiovascular health, yet subtle changes in HRV are often obscured by noise and signal variability in real-world ECG data. This project was motivataed by the challenge of extreacting reliable physiological insights from raw biosignals through robust signal processing and quantitative analysis, rather than just simply relying on idealized or preprocessed datasets. 

## Data Acquisition and Experimental Conditions

ECG data was collected from human subjects using a three-lead ECG configuration, providing sufficient resolution to analyze waveform morphology and timing. Recordings were taken across three distinct conditions: resting baseline, immediaately following physical exertion, and during box breathing to induce controlled respiratory modulation. All these conditions enabled direct comparison of autonomic response and cardiac dynamics. 

## Signal Processing and Feature Extraction

I developed a simple MATLAB-based signal processing pipeline to claen and analyze the ECG signals. This included signal smoothing and noise reduction to improve waveform clarity, peak detection algorithms to identify R-peaks and segment cardiac cycles, and feature extraction of P waves, QRS complexes, and T waves, correlating electrical activity to atrial and ventircular funciton. This entire pipeline was designed to balance sensitivity and robustness, ensuring accurate detection across varying heart rates and signal quality. 

## Heart Rate Variability Analysis

Heart rate variability was quantified by calculating RR intervals between successive heartbeats. Changes in HRV were analyzed across conditions to evaluate the impact of exercise-induced stress and controlled breathing on cardiac rhythm. This analysis revealed measurable differences in beat-to-beat variability, highlighting the physiological effects of both exertion and respiratory control. 
