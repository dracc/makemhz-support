# m8plus
This guide is for patching the m8plus BIOS.

:::tip
Say goodbye to the hassle of software patching! With [Project Stellar](https://makemhz.com/products/stellar),
enjoy a seamless installation experience where software patching becomes a thing of the past.
:::

Start by placing the IPS patch inside of an empty folder with the M8plus BIOS. (The BIOS release pictured below also included a separate BIOS for 1.0-1.5 and another for 1.6)

![Step 1](https://github.com/MakeMHz/xbox-hd-plus/raw/master/manual/images/patch/m8plus_patch_1.png)

Open EVtool and click ‘Unpack’, then choose your BIOS for the system you’re patching. (M8plus.bin for 1.0 - 1.5 systems and M8plus_16.bin for 1.6 systems)

![Step 2](https://github.com/MakeMHz/xbox-hd-plus/raw/master/manual/images/patch/m8plus_patch_2.png)

![Step 3](https://github.com/MakeMHz/xbox-hd-plus/raw/master/manual/images/patch/m8plus_patch_3.png)

At this point, you should have an m8plus_kernel.img file in the same folder has the BIOS.

![Step 4](https://github.com/MakeMHz/xbox-hd-plus/raw/master/manual/images/patch/m8plus_patch_4.png)

Now open up Lunar IPS and click ‘Apply Patch’

![Step 5](https://github.com/MakeMHz/xbox-hd-plus/raw/master/manual/images/patch/m8plus_patch_5.png)

Choose the m8plus.ips patch file.

![Step 6](https://github.com/MakeMHz/xbox-hd-plus/raw/master/manual/images/patch/m8plus_patch_6.png)

Set 'Files of type:' from 'Most Common ROM Files' to 'All Files' and choose the m8plus_kernel.img

![Step 7](https://github.com/MakeMHz/xbox-hd-plus/raw/master/manual/images/patch/m8plus_patch_7.png)

![Step 8](https://github.com/MakeMHz/xbox-hd-plus/raw/master/manual/images/patch/m8plus_patch_8.png)

Now open back up EVtool and click 'Pack'. Choose the m8plus_kernel.img

![Step 9](https://github.com/MakeMHz/xbox-hd-plus/raw/master/manual/images/patch/m8plus_patch_9.png)

Select the correct BIOS as the Base ROM. (M8plus.bin for 1.0 - 1.5 systems and M8plus_16.bin for 1.6 systems)

![Step 10](https://github.com/MakeMHz/xbox-hd-plus/raw/master/manual/images/patch/m8plus_patch_10.png)

For the 'Save As' give the new BIOS a unique name, such as M8plus_patched.bin, and click save.

![Step 11](https://github.com/MakeMHz/xbox-hd-plus/raw/master/manual/images/patch/m8plus_patch_11.png)

Your BIOS is now patched! Flash the BIOS to your modchip of choice and verify by launching the XboxHD+ app.

:::danger
Flashing the modified HDMI BIOS to the console's TSOP is not supported. You have been warned!
:::
