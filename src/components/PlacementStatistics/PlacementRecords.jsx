import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeUp, stagger } from '@/_lib/motion';

/* ---------- JSON data ---------- */
// Add the remaining records (the design shows 45 in the first batch).
const BATCHES = [
  {
    id: '2023-24',
    label: 'Placement Record 2023–2024 Batch',
    records: [
      { name: 'Aishwarya Krishna Naral', spec: 'Finance', company: 'Grant Thornton' },
      { name: 'Anirudha A M', spec: 'Finance', company: 'Grant Thornton' },
      { name: 'Dhanushree N', spec: 'Finance', company: 'Grant Thornton' },
      { name: 'Karthik M S', spec: 'Finance', company: 'Grant Thornton' },
      { name: 'Krutijka Tejpal Rathod', spec: 'Finance', company: 'Grant Thornton' },
      { name: 'Ramya R', spec: 'Finance', company: 'Grant Thornton' },
      { name: 'Sannu', spec: 'Finance', company: 'Grant Thornton' },
      { name: 'Sneha S Reddy', spec: 'Finance', company: 'Grant Thornton' },
      { name: 'Varun V K', spec: 'Finance', company: 'Grant Thornton' },
      { name: 'Sidhu S', spec: 'Marketing', company: 'Joyalukkas India Limited' },
      { name: 'Subhash Chandra M', spec: 'Marketing', company: 'Joyalukkas India Limited' },
      { name: 'Khushboo Jha', spec: 'Marketing', company: 'Haleon' },
      { name: 'Raghul K', spec: 'Marketing', company: 'Saint Gobain-Webner' },
      { name: 'Richard Joshua C', spec: 'Marketing', company: 'PropTimes' },
      { name: 'Shaama M Kindre', spec: 'Marketing', company: 'Jaquar' },
      { name: 'Habeebur Rahman Quraish', spec: 'Marketing', company: 'Home First Finance' },
      { name: 'Mohammed Sahil H', spec: 'Marketing', company: 'Home First Finance' },
      { name: 'Liya Muthamma M D', spec: 'Marketing', company: 'ABFRL' },
      { name: 'Abhishek S', spec: 'Marketing', company: 'ABFRL' },
      { name: 'Dalwin T', spec: 'Marketing', company: 'ABFRL' },
      { name: 'Sagar P', spec: 'Marketing', company: 'ABFRL' },
      { name: 'Vaishnavi P V', spec: 'Marketing', company: 'ABFRL' },
      { name: 'Bi Bi Hajira', spec: 'Marketing', company: 'ABFRL' },
      { name: 'Pragathi Ashok Kanavalli', spec: 'Marketing', company: 'ABFRL' },
      { name: 'Bharath V', spec: 'Marketing', company: 'Home First Finance' },
      { name: 'Ashwin Raj', spec: 'Marketing', company: 'Home First Finance' },
      { name: 'Mahendra Reddy Mully', spec: 'Marketing', company: 'Home First Finance' },
      { name: 'Atira Anthony', spec: 'HR', company: 'InSource India' },
      { name: 'Shashidharaswamy G M', spec: 'Marketing', company: 'Niyo Solution' },
      { name: 'Venkatesh B G', spec: 'Marketing', company: 'Niyo Solution' },
      { name: 'Darshan S', spec: 'Marketing', company: 'Niyo Solution' },
      { name: 'Shakti Nair', spec: 'Marketing', company: 'Niyo Solution' },
      { name: 'Abishek Kumar P', spec: 'Marketing', company: 'Niyo Solution' },
      { name: 'Pavan Ganesh J', spec: 'Marketing', company: 'Niyo Solution' },
      { name: 'Liya Muthamma M D', spec: 'Marketing', company: 'PropTimes' },
      { name: 'Chandu B', spec: 'Marketing', company: 'PropTimes' },
      { name: 'Devi Prasad Naidu', spec: 'Marketing', company: 'PropTimes' },
      { name: 'Bhoomika', spec: 'Marketing', company: 'PropTimes' },
      { name: 'Taranath', spec: 'Marketing', company: 'PropTimes' },
      { name: 'Ganavi M', spec: 'Finance', company: 'CBRE' },
      { name: 'Shaik Mohammad Ibrahim', spec: 'Marketing', company: 'KitchenWhiz' },
      { name: 'Srushti Bhimappa Naganoor', spec: 'Marketing', company: 'KitchenWhiz' },
      { name: 'Shamaa M Kindre', spec: 'Marketing', company: 'Infosys' },
      { name: 'Dhiksha S', spec: 'Marketing', company: 'SWIPE' },
      { name: 'Vijaya Raghavan Janardhan', spec: 'SCM', company: 'DHL' },
      { name: 'Sinchana MM', spec: 'Finance', company: 'Acuity' },
      { name: 'Rohith Kumar R', spec: 'Marketing', company: 'Niyo Solution' },
      { name: 'Sunil Narayan', spec: 'Marketing', company: 'Niyo Solution' },
      { name: 'Jayateerth Kulkarni', spec: 'Marketing', company: 'Niyo Solution' },
      { name: 'Vattamwar Snehil', spec: 'Marketing', company: 'Niyo Solution' },
      { name: 'Deepshikha', spec: 'Marketing', company: 'No Broker' },
      { name: 'Keerthi N', spec: 'Finance', company: 'AK Capital services Ltd' },
      { name: 'Dhiksha S', spec: 'Marketing', company: 'Canon India' },
      { name: 'Rahul Girishkumar Nair', spec: 'Marketing', company: 'Binary Geckos' },
      { name: 'Nithya Sree S', spec: 'Finance', company: 'Fynro' },
      { name: 'Rupali Upadhyay', spec: 'Marketing', company: 'Phonepe' },
      { name: 'Shivangi Srivastava', spec: 'Marketing', company: 'Accenture' },
      { name: 'Getsiah Jayachandran', spec: 'Marketing', company: 'Elomatic Pharmalab' },
      { name: 'Sudheshna Sangadi', spec: 'Marketing', company: 'Sim Gem Groups' },
      { name: 'Krupa S K', spec: 'Marketing', company: 'G4S' },
      { name: 'Srusti V', spec: 'Marketing', company: 'G4S' },
      { name: 'Amrut A Hosamani', spec: 'Marketing', company: 'G4S' },
      { name: 'Bhanuprakash Matukari', spec: 'Marketing', company: 'VCare Group' },
      { name: 'Bharath Kumar R', spec: 'Marketing', company: 'VCare Group' },
      { name: 'Shaik Sajid', spec: 'Marketing', company: 'VCare Group' },
      { name: 'Venganapalli Himachal Reddy', spec: 'Marketing', company: 'VCare Group' },
      { name: 'Sandeetha S', spec: 'Marketing', company: 'MyGate' },
      { name: 'Bhuvana Sree', spec: 'Finance', company: 'Acuity' },
      { name: 'Soumya L', spec: 'HR', company: 'Aster DM Health care' },
      { name: 'Devivaraprasad Naidu R', spec: 'Marketing', company: 'LensKart' },
      { name: 'Machupalli Charan Kumar', spec: 'Marketing', company: 'LensKart' },
      { name: 'Madira Sai Deepika', spec: 'Marketing', company: 'LensKart' },
      { name: 'Nagamma', spec: 'Marketing', company: 'LensKart' },
      { name: 'Naveen Kumar K S', spec: 'Marketing', company: 'LensKart' },
      { name: 'Puneeth R K', spec: 'Marketing', company: 'LensKart' },
      { name: 'Ranjith M', spec: 'Marketing', company: 'LensKart' },
      { name: 'Soundhar S', spec: 'Marketing', company: 'LensKart' },
      { name: 'Sushmita Mahadev Totagi', spec: 'Marketing', company: 'LensKart' },
      { name: 'Nithyashri N', spec: 'Marketing', company: 'OTIS' },
      { name: 'Abhilash M', spec: 'Marketing', company: 'AMPLE' },
      { name: 'Choppa Bhavana', spec: 'Finance', company: 'Wipfli' },
      { name: 'Mohammed Saleem', spec: 'SCM', company: 'StockArea' },
      { name: 'Prabhu Kiran P Rao N N', spec: 'Finance', company: 'Wells Fargo' },
      { name: 'Kariappa M B', spec: 'Finance', company: 'Clear Tax' },
      { name: 'Vimala Shreedhar Ghanekar', spec: 'Finance', company: 'Cloud4Sure' },
    ],
  },
  {
    id: '2022-23',
    label: 'Placement Record 2022–2023 Batch',
    records: [
      { name: 'Blessey Beulah Dantu', spec: 'Marketing', company: 'Otis' },
      { name: 'Prince John Daniel M', spec: 'Marketing', company: 'Prop Times' },
      { name: 'Harshitha Anjaneyalu', spec: 'Marketing', company: 'Prop Times' },
      { name: 'Debajeet Das', spec: 'Marketing', company: 'Prop Times' },
      { name: 'Priyanka S', spec: 'Marketing', company: 'New Wave Computing' },
      { name: 'Harshitha Anjaneyalu', spec: 'Marketing', company: 'Varun Beverages' },
      { name: 'Bhuvana M', spec: 'Marketing', company: 'Varun Beverages' },
      { name: 'Kamalika K C', spec: 'HR', company: 'Broadridge Financial Solutions' },
      { name: 'Prachi Rajendra Taywade', spec: 'Finance', company: 'Broadridge Financial Solutions' },
      { name: 'Shaik Basheer Ahmed', spec: 'Finance', company: 'Grant Thornton' },
      { name: 'Madhushree Bhat', spec: 'Finance', company: 'Grant Thornton' },
      { name: 'Irfana T K', spec: 'Finance', company: 'Grant Thornton' },
      { name: 'Vinay Sangani', spec: 'Finance', company: 'Grant Thornton' },
      { name: 'Prachi Rajendra Taywade', spec: 'Finance', company: 'Grant Thornton' },
      { name: 'Bhuvana M', spec: 'Finance', company: 'Grant Thornton' },
      { name: 'Divya R', spec: 'Finance', company: 'Grant Thornton' },
      { name: 'Deepali Kumari Upadhyay', spec: 'HR', company: 'Ceres India' },
      { name: 'Satish Lokesh Gounder', spec: 'HR', company: 'Ceres India' },
      { name: 'Shreyanshi Singh', spec: 'HR', company: 'Ceres India' },
      { name: 'Prachi Rajendra Taywade', spec: 'Finance', company: 'Dun & Bradstreet' },
      { name: 'Bhuvan Aradhay D L', spec: 'Finance', company: 'Broadridge Financials' },
      { name: 'Vinay Sangani', spec: 'Finance', company: 'Broadridge Financials' },
      { name: 'Thanuja B R', spec: 'Marketing', company: 'Varun Beverages' },
      { name: 'Nagilla Rakesh', spec: 'Marketing', company: 'Square Yards' },
      { name: 'Vaishnavi G', spec: 'Marketing', company: 'Varun Beverages' },
      { name: 'Vaishnavi G', spec: 'Marketing', company: 'Proptimes' },
      { name: 'Venu Gopal Gupta', spec: 'Marketing', company: 'Silicon India Media Publishing' },
      { name: 'Pinak Majumdar', spec: 'Marketing', company: 'Kauvery Hospital' },
      { name: 'Sujeet Kumar Yadav', spec: 'Marketing', company: 'Kansai Nerolac' },
      { name: 'Anish Datta', spec: 'Marketing', company: 'Kansai Nerolac' },
      { name: 'Siddant M Shetti', spec: 'Marketing', company: 'Silicon India Media Publishing' },
      { name: 'Dheeraj PU', spec: 'Marketing', company: 'Kansai Nerolac' },
      { name: 'Ankur Pandey', spec: 'Finance', company: 'BigBulls' },
      { name: 'Bhavana Shrinivas K', spec: 'Finance', company: 'BigBulls' },
      { name: 'Bibi Taliya M Shaikh', spec: 'Finance', company: 'BigBulls' },
      { name: 'Darshan Panegar N S', spec: 'Finance', company: 'BigBulls' },
      { name: 'Lakshmi Devi M N', spec: 'Finance', company: 'BigBulls' },
      { name: 'Neelabh Ajit Bhise', spec: 'Finance', company: 'BigBulls' },
      { name: 'Purushotham N A', spec: 'Finance', company: 'BigBulls' },
      { name: 'Rajshree Dwivedi', spec: 'Finance', company: 'BigBulls' },
      { name: 'Rakshith D Shetty', spec: 'Finance', company: 'BigBulls' },
      { name: 'Revati D Singh', spec: 'Finance', company: 'BigBulls' },
      { name: 'Sai Ram K', spec: 'Finance', company: 'BigBulls' },
      { name: 'Sai Ram K', spec: 'Finance', company: 'BigBulls' },
      { name: 'Sonal Gupta', spec: 'Finance', company: 'BigBulls' },
      { name: 'Subbalakshmi', spec: 'Finance', company: 'JP Morgan chase' },
      { name: 'Supriya Das', spec: 'Finance', company: 'BigBulls' },
      { name: 'Swetha Basireddy', spec: 'Finance', company: 'BigBulls' },
      { name: 'Tejaswi H G', spec: 'Finance', company: 'BigBulls' },
      { name: 'Bhavya T S', spec: 'Marketing', company: 'BigBulls' },
      { name: 'Bhoomika B S', spec: 'Marketing', company: 'BigBulls' },
      { name: 'Boomika R', spec: 'Marketing', company: 'BigBulls' },
      { name: 'Shreya S', spec: 'Marketing', company: 'BigBulls' },
      { name: 'Vishal Kulkarni', spec: 'Marketing', company: 'BigBulls' },
      { name: 'PadmaShree Acharya', spec: 'HR', company: 'Affine' },
      { name: 'Chethan S', spec: 'Marketing', company: 'Aramex' },
      { name: 'Amiya Parihar', spec: 'Marketing', company: 'Kansai Nerolac' },
      { name: 'Ranjan G', spec: 'Finance', company: 'Ceres India' },
      { name: 'Sinchana T', spec: 'Finance', company: 'Ceres India' },
      { name: 'Anasuri Lakshmi Pavan Kumar', spec: 'Finance', company: 'Ceres India' },
      { name: 'Abhaya Kuanr', spec: 'Marketing', company: 'Universal Automation Systems Pvt Lt' },
      { name: 'Rajshree Dwivedi', spec: 'Finance', company: 'Universal Automation Systems Pvt Lt' },
      { name: 'Golla Sukanya Devi', spec: 'Marketing', company: 'Affine.ai' },
      { name: 'Bhavya T S', spec: 'Marketing', company: 'Ajax Engineering' },
      { name: 'Manoj Kumar', spec: 'Marketing', company: 'Ajax Engineering' },
      { name: 'Nareesh KK', spec: 'Marketing', company: 'Svenska Design Hotels' },
      { name: 'Vishal Kulkarni', spec: 'Marketing', company: 'Svenska Design Hotels' },
      { name: 'Karthika E', spec: 'HR', company: 'GI Group' },
      { name: 'Supriya Das', spec: 'Finance', company: 'EY GDS' },
      { name: 'Rijuta', spec: 'Finance', company: 'EY GDS' },
      { name: 'Soubhik Das', spec: 'Finance', company: 'EY GDS' },
      { name: 'Swetha Basireddy', spec: 'Finance', company: 'EY GDS' },
      { name: 'Shreya. N', spec: 'Finance', company: 'EY GDS' },
      { name: 'Rakshith D Shetty', spec: 'Finance', company: 'EY GDS' },
      { name: 'Sindhu V H', spec: 'Marketing', company: 'Haleon' },
      { name: 'Suvarna Levaku', spec: 'Marketing', company: 'Haleon' },
      { name: 'Hemavathi Kuraba', spec: 'Marketing', company: 'Haleon' },
      { name: 'Dinesh S', spec: 'SCM', company: 'Metro Cash & Carry' },
      { name: 'Rohit Rajendra', spec: 'SCM', company: 'Metro Cash & Carry' },
      { name: 'Siddharth Nigam', spec: 'SCM', company: 'Metro Cash & Carry' },
      { name: 'Vaishnav Unni V', spec: 'Marketing', company: 'Woxen Digital Pvt Ltd' },
      { name: 'Hemanth kumar M', spec: 'Marketing', company: 'Woxen Digital Pvt Ltd' },
      { name: 'Alekhya Sagi', spec: 'Marketing', company: 'Woxen Digital Pvt Ltd' },
      { name: 'Raajitha Shankar', spec: 'Marketing', company: 'Woxen Digital Pvt Ltd' },
      { name: 'Devi Prakash', spec: 'Marketing', company: 'Woxen Digital Pvt Ltd' },
      { name: 'Hemashree', spec: 'Marketing', company: 'Woxen Digital Pvt Ltd' },
      { name: 'Reshma S', spec: 'Marketing', company: 'Woxen Digital Pvt Ltd' },
      { name: 'Vandana P J', spec: 'Marketing', company: 'Woxen Digital Pvt Ltd' },
      { name: 'Baby Suma Pullaiahgari', spec: 'Marketing', company: 'Woxen Digital Pvt Ltd' },
      { name: 'Sinchana B N', spec: 'Marketing', company: 'Woxen Digital Pvt Ltd' },
      { name: 'Shrihari Ughade', spec: 'SCM', company: 'JTB Corp' },
      { name: 'Tharani Tharan', spec: 'HR', company: 'GI Group' },
      { name: 'Aashish Shridhar', spec: 'Finance', company: 'Finkart' },
      { name: 'Siddhant M Shetti', spec: 'Marketing', company: 'Silicon India Media Publishing' },
      { name: 'Radhimeena', spec: 'Finance', company: 'GoldenPi' },
      { name: 'Purushotham N A', spec: 'Finance', company: 'GoldenPi' },
      { name: 'Sourabh Ghosh', spec: 'Marketing', company: 'Prop Times' },
      { name: 'Bhoomika B S', spec: 'Marketing', company: 'Biocon' },
      { name: 'Vishal kulkarni', spec: 'Marketing', company: 'JTB Corp' },
      { name: 'Darshan Panegar N S', spec: 'Marketing', company: 'Intellipaat' },
      { name: 'Anupa Anil Kumar', spec: 'Marketing', company: 'Intellipaat' },
      { name: 'Aditya Pandey', spec: 'Marketing', company: 'Intellipaat' },
      { name: 'Abhishek Jangid', spec: 'HR', company: 'AIMS Staffing solutions and Consultin' },
      { name: 'Raajitha Shankar', spec: 'HCM', company: 'Cyte Care Hospitals' },
      { name: 'Ganesh PN', spec: 'Finance', company: 'GoldenPi' },
      { name: 'Pedda Reddygari Pooja', spec: 'HR', company: 'AIMS Staffing solutions and Consultin' },
      { name: 'Tejaswi H G', spec: 'Finance', company: 'Wipro' },
      { name: 'Pradeep kumar kallmadi', spec: 'Marketing', company: 'Berger Paints' },
      { name: 'Mahesh', spec: 'Marketing', company: 'Berger Paints' },
      { name: 'Shaheen Kambli', spec: 'Marketing', company: 'Intellipaat' },
      { name: 'Sinchana B N', spec: 'HR', company: 'Blueberry Semiconductors' },
      { name: 'Hemanth Kumar M', spec: 'Marketing', company: 'NoBroker Hood' },
      { name: 'Kotlo Vandana', spec: 'Marketing', company: 'NoBroker Hood' },
      { name: 'Ankur Pandey', spec: 'Marketing', company: 'Aditya Birla Fashions' },
      { name: 'Darshan Panegar N S', spec: 'Marketing', company: 'Golden Pi' },
      { name: 'Suman Bhojray', spec: 'HR', company: 'Biocon' },
      { name: 'Mohd Shoaib Sayyed', spec: 'Marketing', company: 'Saint Gobain' },
      { name: 'Anish Datta Vooka', spec: 'Marketing', company: 'Policy Bazaar' },
      { name: 'Vinay Kumar K', spec: 'Marketing', company: 'Policy Bazaar' },
      { name: 'Darshan I D', spec: 'Marketing', company: 'Home First Finance' },
      { name: 'Bhavya T S', spec: 'Marketing', company: 'Akshayakalpa Organic' },
      { name: 'Rohit Rajendra', spec: 'SCM', company: 'DHL' },
      { name: 'Dinesh S', spec: 'SCM', company: 'DHL' },
      { name: 'Manoj Kumar G', spec: 'SCM', company: 'DHL' },
      { name: 'Baby Suma Pullaiahgari', spec: 'Marketing', company: 'Analytus' },
      { name: 'Vaishnavi Manchala', spec: 'Marketing', company: 'Analytus' },
      { name: 'Rituaparna Niranjan Biswas', spec: 'Marketing', company: 'Silicon India Media Publishing' },
      { name: 'Anudeep', spec: 'Marketing', company: 'Silicon India Media Publishing' },
      { name: 'Singam Harish Kumar Reddy', spec: 'Marketing', company: 'Assets Global' },
      { name: 'Darshan I D', spec: 'Marketing', company: 'Assets Global' },
      { name: 'Saatvik Rajendra Pote', spec: 'Marketing', company: 'BNM Business sloution' },
      { name: 'R Geethanjali', spec: 'HR', company: 'NoBroker' },
      { name: 'Bhoomika R', spec: 'Marketing', company: 'Proptimes' },
      { name: 'Bikash Brahma', spec: 'Marketing', company: 'Intellipat' },
      { name: 'Prajwal K', spec: 'Marketing', company: 'Intellipat' },
      { name: 'Aman Rajpoot', spec: 'Marketing', company: 'Aditya Birla Fashions' },
      { name: 'Bhoomika R', spec: 'Marketing', company: 'Aditya Birla Fashions' },
      { name: 'Tattipelly Harshini', spec: 'Marketing', company: 'Silicon India Media Publishing' },
      { name: 'Padmashree Acharya', spec: 'HR', company: 'Healthflex' },
      { name: 'Abhishek jangid', spec: 'Marketing', company: 'Esamudeey' },
      { name: 'Bhoomika BS', spec: 'Marketing', company: 'Esamudeey' },
      { name: 'Baby Suma Pullaiahgari', spec: 'BA', company: 'Muthoot Finance' },
      { name: 'Karthik P', spec: 'BA', company: 'Muthoot Finance' },
      { name: 'K Sairam', spec: 'Finance', company: 'Muthoot Finance' },
      { name: 'Sanjeev Avakkanavar', spec: 'Finance', company: 'Muthoot Finance' },
      { name: 'Bhavana Shrinivas K', spec: 'Marketing', company: 'Aditya Birla Fashions' },
      { name: 'Infant Sojiya', spec: 'HR', company: 'Genisys Group' },
      { name: 'Adarsh B.R.', spec: 'Finance', company: 'Joyalukkas India Limited' },
      { name: 'Vaishnav Unni V', spec: 'Finance', company: 'Joyalukkas India Limited' },
      { name: 'Vinay Kumar K', spec: 'Marketing', company: 'Cafe Coffee Day' },
      { name: 'Hemashree CT', spec: 'Finance', company: 'Broadridge Financial Solutions' },
      { name: 'Revati Singh', spec: 'Finance', company: 'Broadridge Financial Solutions' },
      { name: 'Reshma S', spec: 'Finance', company: 'Broadridge Financial Solutions' },
      { name: 'Sonal Gupta', spec: 'Finance', company: 'Broadridge Financial Solutions' },
      { name: 'Harsh Kumar', spec: 'Finance', company: 'KBros Aristo Pvt Ltd.' },
    ],
  },
  {
    id: '2021-22',
    label: 'Placement Record 2021–2022 Batch',
    records: [
      { name: 'Raksha', spec: 'Finance', company: 'Grant Thornton' },
      { name: 'Ankit Jinagal', spec: 'Finance', company: 'Grant Thornton' },
      { name: 'Pramodhini B', spec: 'Finance', company: 'Grant Thornton' },
      { name: 'Amal Anand', spec: 'Finance', company: 'Grant Thornton' },
      { name: 'Charan Kumar S N', spec: 'Finance', company: 'Grant Thornton' },
      { name: 'Harshita Maheshwari', spec: 'Finance', company: 'Grant Thornton' },
      { name: 'Shubham Vishwas Dhole', spec: 'Finance', company: 'Grant Thornton' },
      { name: 'Omkar Hanumant Gopale', spec: 'Finance', company: 'Grant Thornton' },
      { name: 'Vaibhavi Lambore', spec: 'Finance', company: 'Grant Thornton' },
      { name: 'Gunasekar S', spec: 'Marketing', company: 'BlueDart' },
      { name: 'Walunjkar Prathmesh Ishwar', spec: 'Marketing', company: 'BlueDart' },
      { name: 'Soumya K Jainapur', spec: 'Marketing', company: 'Redbus' },
      { name: 'Patil Chetan Milind', spec: 'Marketing', company: 'Cafe Coffee Day' },
      { name: 'Neha Dasharathi', spec: 'Marketing', company: 'Cafe Coffee Day' },
      { name: 'Shivam Purushottam Wasule', spec: 'Marketing', company: 'Standard Chartered Bank' },
      { name: 'Anshi Singh', spec: 'Marketing', company: 'Standard Chartered Bank' },
      { name: 'Shivam Purushottam Wasule', spec: 'Marketing', company: 'Standard Chartered Bank' },
      { name: 'Rituja Jadhe', spec: 'Marketing', company: 'Standard Chartered Bank' },
      { name: 'Phaneema', spec: 'Marketing', company: 'Standard Chartered Bank' },
      { name: 'Ankit Sunil', spec: 'Finance', company: 'Leadsquared' },
      { name: 'Rishitha M G', spec: 'Finance', company: 'Leadsquared' },
      { name: 'Anusha A', spec: 'Finance', company: 'Leadsquared' },
      { name: 'Stephen Thomas Koshy', spec: 'Finance', company: 'Leadsquared' },
      { name: 'Megha Krishnamurthy', spec: 'Finance', company: 'BlueDart' },
      { name: 'Aniket Jaykumar Bhagwat', spec: 'Finance', company: 'BlueDart' },
      { name: 'Shivashish Mishra', spec: 'Marketing', company: 'Tata Consumers' },
      { name: 'Vinaya S S', spec: 'Marketing', company: 'Tata Consumers' },
      { name: 'Nisarg Darji', spec: 'Marketing', company: 'Tata Consumers' },
      { name: 'Shreedhar Joteppa', spec: 'Marketing', company: 'Kansai Nerolac' },
      { name: 'Nitish B Chikkodi', spec: 'Marketing', company: 'Kansai Nerolac' },
      { name: 'Girija Gandavadi', spec: 'Marketing', company: 'Kansai Nerolac' },
      { name: 'Jayanth M', spec: 'SCM', company: 'DHL Supply chain' },
      { name: 'Meghana PN', spec: 'Finance', company: 'Vialto Partners' },
      { name: 'Priya V', spec: 'Finance', company: 'Vialto Partners' },
      { name: 'Anil Sreenivas K', spec: 'Finance', company: 'Vialto Partners' },
      { name: 'Sandeep Sreedhar', spec: 'HR', company: 'Apar Technologies' },
      { name: 'Alankar Mukherjee', spec: 'HR', company: 'Apar Technologies' },
      { name: 'Elakkiya Shree R', spec: 'HR', company: 'Apar Technologies' },
      { name: 'Balaguri Vamsi', spec: 'Marketing', company: 'Kansai Nerolac' },
      { name: 'Somyashree Sahoo', spec: 'Marketing', company: 'Zebronics' },
      { name: 'Dasari Ajith Kumar', spec: 'Marketing', company: 'Muthoot Finance' },
      { name: 'Rakhi Kumari', spec: 'Finance', company: 'Muthoot Finance' },
      { name: 'Varun Kumar N', spec: 'Finance', company: 'Muthoot Finance' },
      { name: 'Anjali Upadhyay', spec: 'Finance', company: 'Muthoot Finance' },
      { name: 'Koushik C', spec: 'Marketing', company: 'Muthoot Finance' },
      { name: 'Santhosh Raj C', spec: 'Marketing', company: 'Collegedunia' },
      { name: 'Rakesh Kumar Lohra', spec: 'Marketing', company: 'Collegedunia' },
      { name: 'Narigipalli Lavanya', spec: 'BA', company: 'Aron Universal' },
      { name: 'Vinaya S S', spec: 'Marketing', company: 'Aron Universal' },
      { name: 'Angana Thakur', spec: 'HR', company: 'Grizmo Labs' },
      { name: 'Rutika Devardekar', spec: 'HR', company: 'Dorsche Gruppe' },
      { name: 'Naveen Kumar N', spec: 'Finance', company: 'PaperPedia' },
      { name: 'Jai Sai Rakshith', spec: 'HR', company: 'Godrej CDPL' },
      { name: 'Shivashish Mishra', spec: 'Marketing', company: 'Stolt India' },
      { name: 'Shivashish Mishra', spec: 'Marketing', company: 'Whistle' },
      { name: 'Ranjith Kumar A', spec: 'Marketing', company: 'Whistle' },
      { name: 'Annu Priya', spec: 'Finance', company: 'Vialto Partners' },
      { name: 'Jhahnvi D Gaddad', spec: 'Finance', company: 'Vialto Partners' },
      { name: 'Arifulla', spec: 'Finance', company: 'Vialto Partners' },
      { name: 'Saloni Raj', spec: 'HR', company: 'Ohmium' },
      { name: 'Abita A', spec: 'HR', company: 'Aster DM Healthcare' },
      { name: 'Meravala Roja', spec: 'HR', company: 'Aster DM Healthcare' },
      { name: 'Anand Kumar', spec: 'Marketing', company: 'Kansai Nerolac' },
      { name: 'Manikanta Reddy', spec: 'Marketing', company: 'Kansai Nerolac' },
      { name: 'G. Mahammad Wahab', spec: 'BA', company: 'Sanvira Industries Ltd' },
      { name: 'Hemalatha', spec: 'HR', company: 'New Wave Computing' },
      { name: 'Rakshay Kumar', spec: 'Marketing', company: 'New Wave Computing' },
      { name: 'Vengalaraju Supriya', spec: 'BA', company: 'Fundsroom' },
      { name: 'S Vishnu Vardhan', spec: 'BA', company: 'Fundsroom' },
      { name: 'Adhish Rahul V N', spec: 'Finance', company: 'Fundsroom' },
      { name: 'Charan Kumar S N', spec: 'Finance', company: 'Fundsroom' },
      { name: 'Deepashree R', spec: 'Finance', company: 'Fundsroom' },
      { name: 'Harshitha L', spec: 'Finance', company: 'Fundsroom' },
      { name: 'Pramod Datta Chichkote', spec: 'Finance', company: 'Fundsroom' },
      { name: 'Raksha', spec: 'Finance', company: 'Fundsroom' },
      { name: 'Rupsa Paul Chowdhary', spec: 'Finance', company: 'Fundsroom' },
      { name: 'S Vishnu Vardhan', spec: 'BA', company: 'Vtiger Systems India Pvt Ltd' },
      { name: 'K Brahmini', spec: 'BA', company: 'Vtiger Systems India Pvt Ltd' },
      { name: 'Jayanth M', spec: 'SCM', company: 'ECom Express' },
      { name: 'Mangesh Kumar Joshi', spec: 'SCM', company: 'ECom Express' },
      { name: 'Pramod Kumar Nail', spec: 'SCM', company: 'ECom Express' },
      { name: 'Indumala', spec: 'HR', company: 'ECom Express' },
      { name: 'Punith Kumar K', spec: 'SCM', company: 'DHL Supply Chain' },
    ],
  },
];

const SPEC_TONES = {
  Finance: 'bg-[#FFEDE6] text-brand-orange',
  Marketing: 'bg-[#EDEBFA] text-[#43358F]',
  HR: 'bg-[#E6F4FB] text-[#0B7FB5]',
  SCM: 'bg-[#FFF6D6] text-[#9A7400]',
  HCM: 'bg-[#E6F7F0] text-[#1A7A4A]',
  BA: 'bg-[#FFF0FB] text-[#9A007A]',
};
const specTone = (s) => SPEC_TONES[s] ?? 'bg-[#F1F1F5] text-black/70';

const pad = (n) => String(n).padStart(2, '0');

/* ---------- Animations ---------- */
const ease = 'easeOut';
const sectionStagger = stagger(0.12);
const tabsStagger = stagger(0.08);
const rowsStagger = stagger(0.04);
const sectionViewport = { once: true, amount: 0.15 };

const shapeTop = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};
const squarePop = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease, delay: 0.4 } },
};
const rowIn = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease } },
};

const thCls =
  'sticky top-0 z-10 whitespace-nowrap border-b-[3px] border-brand-orange bg-[#43358F] px-4 py-4 text-left text-[11px] font-semibold uppercase tracking-wider text-white lg:px-6 lg:py-[19px] lg:text-[14px]';

export default function PlacementRecords() {
  const [activeId, setActiveId] = useState(BATCHES[0].id);
  const batch = BATCHES.find((b) => b.id === activeId);
  const total = batch.records.length;

  return (
    <motion.section
      variants={sectionStagger}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden bg-white bg-[url('/images/home/gird-bg-img.webp')] bg-contain bg-center py-12 lg:pb-[95px] lg:pt-[80px]"
    >
      {/* Top-right orange shape (add placement-shap.webp) */}
      <motion.div
        aria-hidden="true"
        variants={shapeTop}
        className="pointer-events-none absolute right-0 top-0 h-[50px] w-[55px] bg-[url('/images/home/red-shap-bg.svg')] bg-contain bg-right-top bg-no-repeat md:h-[65px] md:w-[72px] lg:h-[82px] lg:w-[90px]"
      />

      {/* Bottom-left yellow square */}
      <motion.span
        aria-hidden="true"
        variants={squarePop}
        className="absolute bottom-0 left-0 size-8 origin-bottom-left bg-[#F5C400] lg:size-[45px]"
      />

      {/* Small pastel squares (only on very wide screens, where there is room) */}
      <span aria-hidden="true" className="absolute left-[6.4%] top-[16.5%] hidden size-[30px] bg-[#F8EFA6] 2xl:block" />
      <span aria-hidden="true" className="absolute left-[12.8%] top-[59%] hidden size-[30px] bg-[#CFC8F2] 2xl:block" />
      <span
        aria-hidden="true"
        className="absolute left-[92.2%] top-[53.5%] hidden size-[30px] bg-[#BFE6F8] 2xl:block"
      />
      <span aria-hidden="true" className="absolute left-[85.8%] top-[90%] hidden size-[30px] bg-[#FBD9E6] 2xl:block" />

      <div className="custom-container relative">
        <motion.div variants={fadeUp}>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] lg:leading-tight">
            <span className="font-light">Placement </span>
            <span className="font-semibold italic">Records</span>
          </h2>
          <p className="mt-3 text-sm text-black/70 lg:text-[16px]">
            Students placed with leading recruiters across Marketing, Finance, HR and SCM.
          </p>
        </motion.div>

        {/* Batch tabs */}
        <motion.div variants={tabsStagger} className="mt-5 flex flex-wrap gap-2 lg:mt-[40px] lg:gap-[16px]">
          {BATCHES.map((b) => {
            const active = b.id === activeId;
            return (
              <motion.button
                key={b.id}
                variants={fadeUp}
                type="button"
                aria-pressed={active}
                onClick={() => setActiveId(b.id)}
                className={`border px-4 py-2.5 text-xs font-medium transition-all duration-300 lg:px-7 lg:py-[19px] lg:text-[16px] ${
                  active
                    ? 'border-brand-orange bg-brand-orange text-white'
                    : 'border-black/15 bg-white text-black hover:-translate-y-0.5 hover:border-brand-orange hover:text-brand-orange'
                }`}
              >
                {b.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Table card */}
        <motion.div
          variants={fadeUp}
          className="mt-4 border border-black/10 bg-white shadow-[0_10px_40px_rgba(67,53,143,0.08)] lg:mt-7"
        >
          <div className="max-h-[420px] overflow-auto [scrollbar-color:#6C4FDD_#EDEBFA] [scrollbar-width:thin] md:max-h-[540px] lg:max-h-[656px]">
            <table className="w-full min-w-[720px] border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className={`${thCls} w-[9%]`}>No.</th>
                  <th className={`${thCls} w-[34%]`}>Name of the Students</th>
                  <th className={`${thCls} w-[22%]`}>Specialization</th>
                  <th className={thCls}>Name of the Companies</th>
                </tr>
              </thead>

              {/* Re-keyed on tab change so the rows animate in again */}
              <AnimatePresence mode="wait">
                <motion.tbody key={batch.id} variants={rowsStagger}>
                  {total === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-14 text-center text-sm text-black/50">
                        Records for this batch will be updated soon.
                      </td>
                    </tr>
                  ) : (
                    batch.records.map((r, i) => (
                      <motion.tr
                        key={`${batch.id}-${i}`}
                        variants={rowIn}
                        className="transition-colors duration-200 odd:bg-white even:bg-[#F7F7FB] hover:bg-[#EEEBFB]"
                      >
                        <td className="px-4 py-3.5 text-sm text-black/50 lg:px-6 lg:py-[15px] lg:text-[15px] border-b border-[#E6E1F7]">
                          {pad(i + 1)}
                        </td>
                        <td className="px-4 py-3.5 text-sm font-medium text-black lg:px-6 lg:py-[15px] lg:text-base  border-b border-[#E6E1F7]">
                          {r.name}
                        </td>
                        <td className="px-4 py-3.5 lg:px-6 lg:py-[15px]  border-b border-[#E6E1F7]">
                          <span className={`inline-block px-3 py-1 text-xs font-medium ${specTone(r.spec)}`}>
                            {r.spec}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 lg:px-6 lg:py-[15px]  border-b border-[#E6E1F7]">
                          <span className="flex items-center gap-3 text-sm text-black lg:text-[15px]">
                            <span className="grid size-6 shrink-0 place-items-center bg-[#EDEBFA] text-xs font-semibold text-[#43358F]">
                              {r.company.charAt(0)}
                            </span>
                            {r.company}
                          </span>
                        </td>
                      </motion.tr>
                    ))
                  )}
                </motion.tbody>
              </AnimatePresence>
            </table>
          </div>

          <p className="border-t border-black/10 px-4 py-3 text-xs text-black/50 lg:px-6 lg:py-4 lg:text-sm">
            {total > 0 ? `Showing 1–${total} records · Scroll to view all` : 'No records yet'}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
