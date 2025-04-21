
/**
 * @public
 * 
 * Results that can be returned by blocks
 */
export type BlockOutput<O> =
  | ContinueOutput<O>
  | StopOutput
  | ConditionResult<O>;

/**
 * @public
 * 
 * Output returned when a block signals to continue
 */
export interface ContinueOutput<O> {

  /**
   * Whether execution should continue
   */
  continue: true;

  /**
   * Whether the output originates from a core block or a conditional block
   */
  outputType: 'block';

  /**
   * The output returned by the blocks callback 
   */
  output: O;
}

/**
 * @public
 * 
 * Output returned when a conditional block signals to continue
 */
export interface ConditionResult<O> {
  /**
   * Whether execution should continue
   */
  continue: true;

  /**
   * Whether the output originates from a core block or a conditional block
   */
  outputType: 'conditional';
  
  /**
   * The condition result returned by the block
   */
  conditionResult: boolean;

  /**
   * The output returned by the blocks callback 
   */
  output: O;
}

/**
 * @public
 * 
 * Output returned when a block signals to stop
 */
export interface StopOutput {
  /**
   * Whether execution should continue
   */
  continue: false;
}
