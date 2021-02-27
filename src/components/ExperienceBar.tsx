import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return (
        <header className={styles.experienceBar}>
            <span>{Number(percentToNextLevel / 100).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 0 })}</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%`, transition: "2s" }} />
                <span
                    className={`${styles.currentExperience}`}
                    style={{ left: `${percentToNextLevel}%` }}
                >
                    {currentExperience}/{experienceToNextLevel} xp
                </span>
            </div>
            <span>100%</span>
        </header>
    )
}

export default ExperienceBar;
