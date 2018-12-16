# OpenVINO

- [Homepage](https://software.intel.com/en-us/openvino-toolkit)
- [Pre Trained Models](https://software.intel.com/en-us/openvino-toolkit/documentation/pretrained-models)
- [Inference Engine Developer Guide](https://software.intel.com/en-us/articles/OpenVINO-InferEngine)
- [Inference Engine Samples](https://software.intel.com/en-us/articles/OpenVINO-IE-Samples)
- [Deep Learning OpenCV](https://software.intel.com/en-us/openvino-toolkit/deep-learning-cv)

Installation

- [Install the Intel® Distribution of OpenVINO™ toolkit for Linux*](https://software.intel.com/en-us/articles/OpenVINO-Install-Linux)
- [Inference Tutorials Generic](https://github.com/intel-iot-devkit/inference-tutorials-generic/tree/openvino_toolkit_r3_0)
- [Qiita](https://qiita.com/PINTO/items/5ac8f4395e190d06cfab)

Techcoded

- [Make Great Computer Vision Apps with the OpenVINO™ Toolkit](https://techdecoded.intel.io/quickhits/make-great-computer-vision-apps-with-the-openvino-toolkit/#gs.jU_nPXg)
- [OpenVINO™ Toolkit and FPGAs](https://techdecoded.intel.io/resources/openvino-toolkit-and-fpgas/#gs.eyexuLA)


# Hello OpenVINO

1. [Download](https://software.intel.com/en-us/openvino-toolkit/choose-download/free-download-linux)
2. Decompress:
```
user@workstation:~$ cd Downloads/
user@workstation:~/Downloads$ ls l_openvino_toolkit_p_2018.4.420_online.tgz 
l_openvino_toolkit_p_2018.4.420_online.tgz
user@workstation:~/Downloads$ 
```
```
user@workstation:~/Downloads$ tar xvf l_openvino_toolkit_p_2018.4.420_online.tgz 
l_openvino_toolkit_p_2018.4.420_online/
l_openvino_toolkit_p_2018.4.420_online/pset/
l_openvino_toolkit_p_2018.4.420_online/pset/32e/
l_openvino_toolkit_p_2018.4.420_online/pset/32e/imageformats/
l_openvino_toolkit_p_2018.4.420_online/pset/32e/imageformats/libqjpeg.so
l_openvino_toolkit_p_2018.4.420_online/pset/32e/libz/
l_openvino_toolkit_p_2018.4.420_online/pset/32e/libz/libz.so
l_openvino_toolkit_p_2018.4.420_online/pset/32e/libz/libz.so.1
l_openvino_toolkit_p_2018.4.420_online/pset/32e/libz/libz.so.1.2.11
l_openvino_toolkit_p_2018.4.420_online/pset/32e/platforms/
l_openvino_toolkit_p_2018.4.420_online/pset/32e/platforms/libqxcb.so
l_openvino_toolkit_p_2018.4.420_online/pset/32e/qt/
l_openvino_toolkit_p_2018.4.420_online/pset/32e/qt/libQt5Core.so
l_openvino_toolkit_p_2018.4.420_online/pset/32e/qt/libQt5Core.so.5
l_openvino_toolkit_p_2018.4.420_online/pset/32e/qt/libQt5Core.so.5.6
l_openvino_toolkit_p_2018.4.420_online/pset/32e/qt/libQt5Core.so.5.6.2
l_openvino_toolkit_p_2018.4.420_online/pset/32e/qt/libQt5DBus.so
l_openvino_toolkit_p_2018.4.420_online/pset/32e/qt/libQt5DBus.so.5
l_openvino_toolkit_p_2018.4.420_online/pset/32e/qt/libQt5DBus.so.5.6
l_openvino_toolkit_p_2018.4.420_online/pset/32e/qt/libQt5DBus.so.5.6.2
l_openvino_toolkit_p_2018.4.420_online/pset/32e/qt/libQt5Gui.so
l_openvino_toolkit_p_2018.4.420_online/pset/32e/qt/libQt5Gui.so.5
l_openvino_toolkit_p_2018.4.420_online/pset/32e/qt/libQt5Gui.so.5.6
l_openvino_toolkit_p_2018.4.420_online/pset/32e/qt/libQt5Gui.so.5.6.2
l_openvino_toolkit_p_2018.4.420_online/pset/32e/qt/libQt5Widgets.so
l_openvino_toolkit_p_2018.4.420_online/pset/32e/qt/libQt5Widgets.so.5
l_openvino_toolkit_p_2018.4.420_online/pset/32e/qt/libQt5Widgets.so.5.6
l_openvino_toolkit_p_2018.4.420_online/pset/32e/qt/libQt5Widgets.so.5.6.2
l_openvino_toolkit_p_2018.4.420_online/pset/32e/qt/libQt5XcbQpa.so
l_openvino_toolkit_p_2018.4.420_online/pset/32e/qt/libQt5XcbQpa.so.5
l_openvino_toolkit_p_2018.4.420_online/pset/32e/qt/libQt5XcbQpa.so.5.6
l_openvino_toolkit_p_2018.4.420_online/pset/32e/qt/libQt5XcbQpa.so.5.6.2
l_openvino_toolkit_p_2018.4.420_online/pset/32e/qt/libQt5Xml.so
l_openvino_toolkit_p_2018.4.420_online/pset/32e/qt/libQt5Xml.so.5
l_openvino_toolkit_p_2018.4.420_online/pset/32e/qt/libQt5Xml.so.5.6
l_openvino_toolkit_p_2018.4.420_online/pset/32e/qt/libQt5Xml.so.5.6.2
l_openvino_toolkit_p_2018.4.420_online/pset/32e/qt/libxcb.so
l_openvino_toolkit_p_2018.4.420_online/pset/32e/qt/libxcb.so.1
l_openvino_toolkit_p_2018.4.420_online/pset/32e/qt/libxcb.so.1.1.0
l_openvino_toolkit_p_2018.4.420_online/pset/32e/install
l_openvino_toolkit_p_2018.4.420_online/pset/32e/install_gui
l_openvino_toolkit_p_2018.4.420_online/pset/32e/libISSASecureWebChannel.so
l_openvino_toolkit_p_2018.4.420_online/pset/32e/libISSASoapMessenger.so
l_openvino_toolkit_p_2018.4.420_online/pset/32e/libcrypto.so.1.0.0
l_openvino_toolkit_p_2018.4.420_online/pset/32e/libssl.so.1.0.0
l_openvino_toolkit_p_2018.4.420_online/pset/32e/libsv.so
l_openvino_toolkit_p_2018.4.420_online/pset/images/
l_openvino_toolkit_p_2018.4.420_online/pset/images/finish.png
l_openvino_toolkit_p_2018.4.420_online/pset/images/splash.png
l_openvino_toolkit_p_2018.4.420_online/pset/licenses/
l_openvino_toolkit_p_2018.4.420_online/pset/licenses/libstdc++/
l_openvino_toolkit_p_2018.4.420_online/pset/licenses/libstdc++/readme-libstdc++.txt
l_openvino_toolkit_p_2018.4.420_online/pset/licenses/openssl/
l_openvino_toolkit_p_2018.4.420_online/pset/licenses/openssl/license.txt
l_openvino_toolkit_p_2018.4.420_online/pset/licenses/openssl/readme.txt
l_openvino_toolkit_p_2018.4.420_online/pset/licenses/PYTHON/
l_openvino_toolkit_p_2018.4.420_online/pset/licenses/PYTHON/License-BEOPEN.com_v1.0.txt
l_openvino_toolkit_p_2018.4.420_online/pset/licenses/qt/
l_openvino_toolkit_p_2018.4.420_online/pset/licenses/qt/LICENSE.LGPLv3
l_openvino_toolkit_p_2018.4.420_online/pset/licenses/qt/qt_source_code.txt
l_openvino_toolkit_p_2018.4.420_online/pset/scripts/
l_openvino_toolkit_p_2018.4.420_online/pset/scripts/force_remove.sh
l_openvino_toolkit_p_2018.4.420_online/pset/check.awk
l_openvino_toolkit_p_2018.4.420_online/pset/install.cab
l_openvino_toolkit_p_2018.4.420_online/pset/mediaconfig.xml
l_openvino_toolkit_p_2018.4.420_online/pset/openvino_multiroot_layer.cab
l_openvino_toolkit_p_2018.4.420_online/pset/openvino_prerequisites.cab
l_openvino_toolkit_p_2018.4.420_online/pset/openvino_sys_name.cab
l_openvino_toolkit_p_2018.4.420_online/pset/phonehome.cab
l_openvino_toolkit_p_2018.4.420_online/pset/pset_standard_dialogs.cab
l_openvino_toolkit_p_2018.4.420_online/pset/pset_user_stat.cab
l_openvino_toolkit_p_2018.4.420_online/pset/signing.cab
l_openvino_toolkit_p_2018.4.420_online/rpm/
l_openvino_toolkit_p_2018.4.420_online/EULA.txt
l_openvino_toolkit_p_2018.4.420_online/install.sh
l_openvino_toolkit_p_2018.4.420_online/install_GUI.sh
l_openvino_toolkit_p_2018.4.420_online/product.xml
l_openvino_toolkit_p_2018.4.420_online/silent.cfg
user@workstation:~/Downloads$ tar xvf l_openvino_toolkit_p_2018.4.420_online.tgz
```

```
user@workstation:~/Downloads$ cd l_openvino_toolkit_p_2018.4.420_online/
user@workstation:~/Downloads/l_openvino_toolkit_p_2018.4.420_online$ ls
EULA.txt  install_GUI.sh  install.sh  product.xml  pset  rpm  silent.cfg
user@workstation:~/Downloads/l_openvino_toolkit_p_2018.4.420_online$ 
```

```
user@workstation:~/Downloads/l_openvino_toolkit_p_2018.4.420_online$ bash install_GUI.sh 
```

```
Intel® Graphics Compute Runtime for OpenCL™ Driver is missing but you will be prompted to install later
You will be prompted later to install the required Intel® Graphics Compute Runtime for OpenCL™ Driver For applications that offload computation to your Intel® GPU, the Intel® Graphics Compute Runtime for OpenCL™ Driver package for Linux is required.

Another version of OpenCV is already installed
Another version of OpenCV has been detected. After completing this part of the installation, use the installation guide to set up OpenCV_DIR environmental variable.

Missing required libraries or packages
Install the following libraries or packages required for Intel-optimized OpenCV 3.4, the Inference Engine, and the Model Optimizer tools: 
libcairo2-dev
libpango1.0-dev
libgtk2.0-dev
libswscale-dev
libavcodec-dev
libavformat-dev
After completing this part of the installation, use the installation guide to install this dependency.

Non root installation
You are running the installation as a regular Linux user. Installation of the Intel(R) Media SDK requires privileges escalation. To install the component, restart the installation script in root/sudo mode.

Installation packages validation failed
Installation program is unable to validate installation packages with digital signature. You may restart setup program with --ignore-signature to bypass this check.
```

## Command Line

```
--------------------------------------------------------------------------------
Missing optional prerequisites
-- Intel® Graphics Compute Runtime for OpenCL™ Driver is missing but you will
be prompted to install later
-- Another version of OpenCV is already installed
-- Missing required libraries or packages
-- Non root installation
-- Installation packages validation failed
--------------------------------------------------------------------------------
```

### Detailed

```
Prerequisites > Missing Prerequisite
--------------------------------------------------------------------------------
You will be prompted later to install the required Intel® Graphics Compute
Runtime for OpenCL™ Driver For applications that offload computation to your
Intel® GPU, the Intel® Graphics Compute Runtime for OpenCL™ Driver package for 
Linux is required.
--------------------------------------------------------------------------------
```

```
Prerequisites > Missing Prerequisite
--------------------------------------------------------------------------------
Another version of OpenCV has been detected. After completing this part of the
installation, use the installation guide to set up OpenCV_DIR environmental
variable.
--------------------------------------------------------------------------------
```

```
Prerequisites > Missing Prerequisite
--------------------------------------------------------------------------------
Install the following libraries or packages required for Intel-optimized OpenCV 
3.4, the Inference Engine, and the Model Optimizer tools:     - libcairo2-dev
    - libpango1.0-dev
    - libgtk2.0-dev
    - libswscale-dev
    - libavcodec-dev
    - libavformat-dev
 After completing this part of the installation, use the installation guide to
install this dependency.
--------------------------------------------------------------------------------
```

```
$ sudo -E apt update
$ sudo -E apt -y install build-essential python3-pip virtualenv cmake libpng12-dev libcairo2-dev libpango1.0-dev libglib2.0-dev libgtk2.0-dev libswscale-dev libavcodec-dev libavformat-dev libgstreamer1.0-0 gstreamer1.0-plugins-base
```

```
Prerequisites > Missing Prerequisite
--------------------------------------------------------------------------------
You are running the installation as a regular Linux user. Installation of the
Intel(R) Media SDK requires privileges escalation. To install the component,
restart the installation script in root/sudo mode.
--------------------------------------------------------------------------------
```

```
user@workstation:~/Downloads/openvino-docker$ sudo bash install.sh --ignore-signature
```

```
--------------------------------------------------------------------------------
Missing optional prerequisites
-- Intel® Graphics Compute Runtime for OpenCL™ Driver is missing but you will
be prompted to install later
-- Another version of OpenCV is already installed
--------------------------------------------------------------------------------
```

```
Options > Pre-install Summary
--------------------------------------------------------------------------------
Install location:
    /home/user/intel

Component(s) selected:
    Inference Engine                                                       246MB
        Inference Engine Development Kit                                        
        Inference Engine Runtime for Intel® CPU                                 
        Inference Engine Runtime for Intel® Processor Graphics                  
        Inference Engine Runtime for Intel® Movidius™ VPU                      
        Inference Engine Runtime for Intel® Gaussian Neural Accelerator         
        Inference Engine Runtime for Intel® FPGA                                

    Models Optimizer                                                         3MB
        Model Optimizer Tool                                                    

    OpenCV                                                                 215MB
        OpenCV Libraries Ubuntu                                                 

    OpenVX                                                                 522MB
        OpenVX* Runtime                                                         

    Models                                                                 296MB
        Pre-trained models                                                      

    Algorithms                                                              68MB
        Computer Vision Algorithms Ubuntu                                       

   Install space required:  1.5GB

--------------------------------------------------------------------------------
```

```
Installation
--------------------------------------------------------------------------------
Each component will be installed individually. If you cancel the installation,
some components might remain on your system. This installation may take several 
minutes, depending on your system and the options you selected.
--------------------------------------------------------------------------------
Installing Inference Engine Runtime for Intel® FPGA component... done
--------------------------------------------------------------------------------
Installing Inference Engine Runtime for Intel® Gaussian Neural Accelerator
component... done
--------------------------------------------------------------------------------
Installing Inference Engine Runtime for Intel® Movidius™ VPU component... done
--------------------------------------------------------------------------------
Installing Inference Engine Runtime for Intel® Processor Graphics component... done
--------------------------------------------------------------------------------
Installing Inference Engine Runtime for Intel® CPU component... done
--------------------------------------------------------------------------------
Installing Inference Engine Development Kit component... done
--------------------------------------------------------------------------------
Installing Model Optimizer Tool component... done
--------------------------------------------------------------------------------
Installing OpenCV Libraries Ubuntu component... done
--------------------------------------------------------------------------------
Installing OpenVX* Runtime component...
--------------------------------------------------------------------------------
Installing Pre-trained models component... done
--------------------------------------------------------------------------------
Installing Computer Vision Algorithms Ubuntu component... done
--------------------------------------------------------------------------------
Finalizing product configuration...
--------------------------------------------------------------------------------

Complete
--------------------------------------------------------------------------------
```

```
Intel® Distribution of OpenVINO™ toolkit 2018 R4 for Linux* has been
successfully installed in /home/user/intel/computer_vision_sdk_2018.4.420.

Next Steps:

Read through the product overview to gain a better understanding of how the
product works and find the latest updates:
https://software.intel.com/en-us/openvino-toolkit. 

Open and read the documentation that you need to configure the product for use
on your system: 
/home/user/intel/computer_vision_sdk_2018.4.420/documentation/OpenVINO-Install-L
inux-online.html
You can also find this document online: 
https://software.intel.com/en-us/articles/OpenVINO-Install-Linux#set-the-environ
ment-variables

Run demo apps available in the
/home/user/intel/computer_vision_sdk_2018.4.420/deployment_tools/demo folder to 
verify the installation and learn the basics of the Intel® Distribution of
OpenVINO™ toolkit 2018 R4 for Linux*.

--------------------------------------------------------------------------------
Press "Enter" key to quit:   
```

```
Intel® Distribution of OpenVINO™ toolkit 2018 R4 for Linux* has been
successfully installed in /opt/intel/computer_vision_sdk_2018.4.420.

Next Steps:

Read through the product overview to gain a better understanding of how the
product works and find the latest updates:
https://software.intel.com/en-us/openvino-toolkit. 

Open and read the documentation that you need to configure the product for use
on your system: 
/opt/intel/computer_vision_sdk_2018.4.420/documentation/OpenVINO-Install-Linux-o
nline.html
You can also find this document online: 
https://software.intel.com/en-us/articles/OpenVINO-Install-Linux#set-the-environ
ment-variables

Run demo apps available in the
/opt/intel/computer_vision_sdk_2018.4.420/deployment_tools/demo folder to verify
the installation and learn the basics of the Intel® Distribution of OpenVINO™
toolkit 2018 R4 for Linux*.

--------------------------------------------------------------------------------
Press "Enter" key to quit: 
```

```
# cd /opt/intel/computer_vision_sdk_2018.4.420/deployment_tools/demo
# ls
README.txt  car.png  car_1.bmp	demo_security_barrier_camera.sh  demo_squeezenet_download_convert_run.sh  squeezenet1.1.labels
```

```
# bash demo_squeezenet_download_convert_run.sh
target_precision = FP32
```

```
user@workstation:~/intel/computer_vision_sdk_2018.4.420/deployment_tools/demo$ sudo cp ../inference_engine/external/97-usbboot.rules  /etc/udev/rules.d/
user@workstation:~/intel/computer_vision_sdk_2018.4.420/deployment_tools/demo$ sudo udevadm control --reload-rules
user@workstation:~/intel/computer_vision_sdk_2018.4.420/deployment_tools/demo$ sudo udevadm trigger
user@workstation:~/intel/computer_vision_sdk_2018.4.420/deployment_tools/demo$ sudo ldconfig
```

Connect

```
user@workstation:~/intel/computer_vision_sdk_2018.4.420/deployment_tools/demo$ dmesg
[403218.065036] usb 2-1: new high-speed USB device number 25 using xhci_hcd
[403218.205595] usb 2-1: New USB device found, idVendor=03e7, idProduct=2150
[403218.205599] usb 2-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[403218.205601] usb 2-1: Product: Movidius MA2X5X
[403218.205603] usb 2-1: Manufacturer: Movidius Ltd.
[403218.205605] usb 2-1: SerialNumber: 03e72150
[404178.943151] usb 2-1: USB disconnect, device number 25
[404180.426507] usb 2-1: new high-speed USB device number 26 using xhci_hcd
[404180.567012] usb 2-1: New USB device found, idVendor=03e7, idProduct=2150
[404180.567015] usb 2-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[404180.567017] usb 2-1: Product: Movidius MA2X5X
[404180.567019] usb 2-1: Manufacturer: Movidius Ltd.
[404180.567021] usb 2-1: SerialNumber: 03e72150
```

```
user@workstation:~/intel/computer_vision_sdk_2018.4.420/deployment_tools/demo$ ./demo_security_barrier_camera.sh -d CPU
user@workstation:~/intel/computer_vision_sdk_2018.4.420/deployment_tools/demo$ ./demo_security_barrier_camera.sh -d MYRIAD
```

```
user@workstation:~/inference_engine_samples/intel64/Release$ ./classification_sample -d CPU -i /home/user/intel/computer_vision_sdk/deployment_tools/demo/../demo/w.jpg -m /home/user/openvino_models/ir/squeezenet1.1/FP32/squeezenet1.1.xml
```

### GPU

```
user@workstation:~/intel/computer_vision_sdk/deployment_tools$ cd ..
user@workstation:~/intel/computer_vision_sdk$ cd install_dependencies/
user@workstation:~/intel/computer_vision_sdk/install_dependencies$ ls
install_4_14_kernel.sh          install_guide.html                  intel-opencl-18.28.11080.x86_64.rpm
_install_all_dependencies.sh    install_NEO_OCL_driver.sh
install_cv_sdk_dependencies.sh  intel-opencl_18.28.11080_amd64.deb
user@workstation:~/intel/computer_vision_sdk/install_dependencies$ sudo -E su
root@workstation:/home/user/intel/computer_vision_sdk/install_dependencies# uname -r
4.13.0-41-generic
root@workstation:/home/user/intel/computer_vision_sdk/install_dependencies# ./install_4_14_kernel.sh
+ grep -i rhel /etc/os-release
+ grep -i ubuntu /etc/os-release
+ sudo -E add-apt-repository ppa:teejee2008/ppa
 
 More info: https://launchpad.net/~teejee2008/+archive/ubuntu/ppa
Press [ENTER] to continue or ctrl-c to cancel adding it
```

## OpenVINO Docker

```
user@workstation:~/Downloads$ git clone https://github.com/mateoguzman/openvino-docker.git
Cloning into 'openvino-docker'...
remote: Enumerating objects: 12, done.
remote: Counting objects: 100% (12/12), done.
remote: Compressing objects: 100% (10/10), done.
remote: Total 12 (delta 3), reused 6 (delta 1), pack-reused 0
Unpacking objects: 100% (12/12), done.
Checking connectivity... done.
```

```
user@workstation:~/Downloads/openvino-docker$ ls
Dockerfile      install.sh                                  product.xml  rpm
EULA.txt        l_openvino_toolkit_p_2018.4.420_online      pset         silent.cfg
install_GUI.sh  l_openvino_toolkit_p_2018.4.420_online.tgz  README.md
user@workstation:~/Downloads/openvino-docker$ 
```

```

```
