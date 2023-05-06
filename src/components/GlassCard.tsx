import React from 'react';
import styles from './GlassCard.module.scss';

interface GlassCardProps {
  children: React.ReactNode;
}

const GlassCard: React.FC<GlassCardProps> = ({ children }) => {
  return <div className={styles.glassCard}>{children}</div>;
};

export default GlassCard;
