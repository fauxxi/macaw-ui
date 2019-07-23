import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import classNames from "classnames";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  "@keyframes skeleton-animation": {
    "0%": {
      opacity: 0.6
    },
    "100%": {
      opacity: 1
    }
  },
  primary: {
    "&$skeleton": {
      background: theme.palette.primary.main
    }
  },
  skeleton: {
    animation: "skeleton-animation .75s linear infinite forwards alternate",
    background: theme.palette.background.default,
    borderRadius: 4,
    display: "block",
    height: "0.8em",
    margin: "0.2em 0"
  }
}));

interface SkeletonProps {
  className?: string;
  primary?: boolean;
  style?: React.CSSProperties;
}

const Skeleton: React.FC<SkeletonProps> = props => {
  const { className, primary, ...rest } = props;
  const classes = useStyles(props);
  return (
    <span
      className={classNames(classes.skeleton, className, {
        [classes.primary]: primary
      })}
      {...rest}
    >
      &zwnj;
    </span>
  );
};

Skeleton.displayName = "Skeleton";
export default Skeleton;
