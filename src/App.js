
import './App.css';
import PoseEstimation from './components/PoseEstimation';
import PoseAndImageClassification from './components/Pose_Image_Together';



function App() {
    return (
        <div className="App">
           {/* <PoseEstimation /> */}
           <PoseAndImageClassification />
        </div>
    );
}

export default App;