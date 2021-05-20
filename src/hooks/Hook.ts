import { _, info } from '../utils'
import { HookNames, HookConfigs, IHook } from '../types'

abstract class Hook implements IHook {
  public name: HookNames;
  public configs: HookConfigs;
  public userConfigs: HookConfigs;
  public defaultConfigs: HookConfigs;

  public constructor (
      name: HookNames,
      configs: HookConfigs = null,
      userConfigs: HookConfigs = null,
      defaultConfigs: HookConfigs = null
  ) {
      info(name)

      this.name = name
      this.userConfigs = userConfigs
      this.defaultConfigs = defaultConfigs

      if (
          this.defaultConfigs &&
      this.userConfigs &&
      typeof this.userConfigs === 'object'
      ) {
          this.validateUserConfigs()
          this.configs = _.merge(this.userConfigs, this.defaultConfigs)
      } else {
          this.configs = this.defaultConfigs
      }
  }

  public abstract init(): Promise<any>;

  public abstract validateUserConfigs(): void;
}

export default Hook
