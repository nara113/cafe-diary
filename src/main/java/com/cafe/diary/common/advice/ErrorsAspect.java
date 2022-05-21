package com.cafe.diary.common.advice;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.Map;
import java.util.stream.Collectors;

@Slf4j
@Aspect
@Component
public class ErrorsAspect {
    @Pointcut("execution(* com.cafe.diary..*Controller.*(..))")
    private void allController() {}

    @Pointcut("@annotation(com.cafe.diary.common.annotation.BindingResultAop)")
    private void bindingResultAnnotation() {}

    @Around("bindingResultAnnotation()")
    public Object targetArgs(ProceedingJoinPoint joinPoint) throws Throwable {
        log.info("target : {}", joinPoint.getSignature());

        Object[] args = joinPoint.getArgs();

        for (Object arg : args) {
            if (arg instanceof BindingResult) {
                BindingResult bindingResult = (BindingResult) arg;

                if (bindingResult.hasErrors()) {
                    Map<String, String> errors = bindingResult.getFieldErrors()
                            .stream()
                            .collect(Collectors.toMap(FieldError::getField, FieldError::getDefaultMessage));

                    return ResponseEntity.badRequest()
                            .body(errors);
                }
            }
        }

        return joinPoint.proceed();
    }
}
