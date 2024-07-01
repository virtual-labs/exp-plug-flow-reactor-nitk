### Background and Theory

<p style="text-indent: 30px; text-align: justify;">
Tubular reactors are one category of flow reactors. These reactor have continuous inflow
and outflow of materials. In the tubular reactor, the feed enters at one end of a cylindrical tube
and the product stream leaves at the other end. The long tube and the lack of provision for
stirring prevents complete mixing of the fluid in the tube. Hence the properties of the flowing
stream will vary from one point to another, namely in both radial and axial directions.</p>

<center><img  src="images/thpf1.gif" style="width:645px;height:291px ; bottom: -15px; " ></center><br><br>

<p style="text-align: justify;">Ideal tubular reactor is referred as a plug flow reactor(PFR). PFRs are frequently referred
to as piston flow reactors. The key assumption is that as a plug flows through a tubular reactor ,
the fluid is perfectly mixed in the radial direction but not in the axial direction (forwards or
backwards). Each plug of differential volume is considered as a separate entity, effectively an
infinitesimally small batch reactor, limiting to zero volume. As it flows down the tubular PFR,
the residence time (<img src="../images/CodeCogsEqn146.gif" style="width:10px;height:8px;">) of the plug is a function of its position in the reactor. In the ideal PFR, the
residence time distribution is therefore a Dirac delta function(small and tall) with a value equal
to τ. The PFR model works well for many fluids: liquids, gases, and slurries. An ideal plug flow
reactor has a fixed residence time: Any fluid (plug) that enters the reactor at time t will exit the
reactor at time t + <img src="../images/CodeCogsEqn146.gif" style="width:10px;height:8px;">, where τ is the residence time of the reactor.</p>
<p style="text-align: justify;">Residence time in the reactor is equal to the space time if the conditions in the reactor like
pressure and temperature are same as those at the entrance. In the ideal tubular reactor, which is
called the &ldquo;plug flow&rdquo; reactor, specific assumptions are made about the extent of mixing:</p>
<ol style="list-style-type: number;">
<li>no mixing in the axial direction, i.e., the direction of flow</li>
<li>complete mixing in the radial direction</li>
<li>a uniform velocity profile across the radius</li>
</ol>
<p style="text-align: justify;">
<p style="text-align: justify;">The absence of longitudinal mixing is the special characteristics of this type of reactor. It is an
assumption at the opposite extreme from the complete mixing assumption of the ideal stirred
tank reactor. The validity of the assumptions will depend on the geometry of the reactor and the
flow conditions. Deviations, which are frequent but not always important, are of two kinds:</p>
1. mixing in longitudinal direction due to vortices and turbulence<br>
2. incomplete mixing in radial direction in laminar flow conditions<br>

#### Mass Balance :
Steady state molar balance over small elemental volume ΔV yields<br>
<center><img src="images/eq1.jpg" style="width:307px;height:76px ; bottom: -15px; " ></center><br><br>

The conversion, X<sub>A</sub>, is defined as:<br>
<p style="text-align: justify;">X<sub>A</sub> = (inlet concentration - outlet concentration) / (inlet concentration)<br>
Volume of a PFR with given influent flow rate and feed composition to achieve a
required conversion may be obtained from the above equation, if the rate equation is known. The
3rd term in the above equation may be integrated if the rate equation is known.
Rate equation for a given reaction can also be obtained using a PFR.
For a single reaction say, A+B->C+D</p>
Assume the rate equation to be <img src="images/eq23.PNG" style="width:153px;height:29px ; bottom: -15px; " >and a constant density system</p>
<p style="text-align: justify;">
Experiments to be performed with different space times in the reactor with the known ratio of
reactant B to A(M) in the inlet. Steady state concentration of A at the reactor outlet may be
analysed for each run.</p>
Now equation A after integration with for M>1 , can be written as<br>
<center><img src="images/eq2.jpg" style="width:308px;height:70px ; bottom: -15px; " ></center><br>

Plotting
<center><img src="images/eq2.jpg" style="width:308px;height:70px ; bottom: -20px; " > vs <img src="images/j1lXitGp.png" style="width:15px;height:28px ; bottom: -15px; " ></center><br><br>
yields a straightline passing through origin if the
assumed equation is correct. The slope=k.<br>
For M=1, the performance equation is<img src="images/eq3.jpg" style="width:207px;height:75px ; bottom: -20px; " ><br>
So the plot of<center><img src="images/KzKdXIFK.png" style="width:139px;height:69px ; bottom: -15px; " >vs <img src="images/j1lXitGp.png" style="width:15px;height:28px ; bottom: -10xpx; " ></center><br><br>

yields a straightline passing through origin if the assumed equation is correct. The slope=k.<br>
If the data do not fit by a straight line assume different rate equation and proceed as above.<br>
<b>Note: For theory on conductivity meter, refer the &rdquo;Theory Section&ldquo; for Batch
reactor</b>
</p>
