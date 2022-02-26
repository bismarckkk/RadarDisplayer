#!/usr/bin/env python3
# -*- encoding: utf-8 -*-
# @Author : Bismarckkk
# @Site   : https://github.com/bismarckkk
# @File   : wsApi.py

from app import socketio

from rosNode import calibrateHandlers


@socketio.on('connect')
def connect():
    print('Client Connect')


@socketio.on('cameraCalibrate', namespace='/api/ws')
def cameraCalibrate(data):
    if data['camera'] in calibrateHandlers.keys():
        calibrateHandlers[data['camera']].publish(data['path'])
